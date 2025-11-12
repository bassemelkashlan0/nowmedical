import { NextResponse } from 'next/server';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  videoUrl: string;
  channelTitle: string;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    // Get channelId from query param or environment variable
    let channelId = searchParams.get('channelId') || process.env.YOUTUBE_CHANNEL_ID;
    const channelUsername = searchParams.get('channelUsername') || process.env.YOUTUBE_CHANNEL_USERNAME;
    const videoId = searchParams.get('videoId') || process.env.YOUTUBE_VIDEO_ID;
    const maxResults = parseInt(searchParams.get('maxResults') || '50');
    
    const apiKey = process.env.YOUTUBE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'YouTube API key is not configured' },
        { status: 500 }
      );
    }

    // If video ID is provided, get channel ID from the video
    if (!channelId && videoId) {
      try {
        const videoResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
        );

        if (videoResponse.ok) {
          const videoData = await videoResponse.json();
          if (videoData.items && videoData.items.length > 0) {
            channelId = videoData.items[0].snippet.channelId;
          }
        }
      } catch (error) {
        console.error('Error fetching channel ID from video:', error);
      }
    }

    // If channel username is provided but no channel ID, resolve username to channel ID
    if (!channelId && channelUsername) {
      // Remove @ symbol if present
      const cleanUsername = channelUsername.replace('@', '');
      
      // Try to get channel by username/handle
      const usernameResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${cleanUsername}&key=${apiKey}`
      );

      if (usernameResponse.ok) {
        const usernameData = await usernameResponse.json();
        if (usernameData.items && usernameData.items.length > 0) {
          channelId = usernameData.items[0].id;
        }
      }

      // If username lookup failed, try with handle (channel handle format)
      if (!channelId) {
        const handleResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(cleanUsername)}&key=${apiKey}&maxResults=1`
        );

        if (handleResponse.ok) {
          const handleData = await handleResponse.json();
          if (handleData.items && handleData.items.length > 0) {
            channelId = handleData.items[0].snippet.channelId;
          }
        }
      }
    }

    // If still no channel ID, try to get it from a known video ID (fallback)
    if (!channelId) {
      // Try using one of the video IDs found in the codebase
      const fallbackVideoIds = ['zeArmG81bAE', 'IpTEkX4lRWQ', 'BUde4AOLH7Y'];
      for (const vidId of fallbackVideoIds) {
        try {
          const videoResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${vidId}&key=${apiKey}`
          );

          if (videoResponse.ok) {
            const videoData = await videoResponse.json();
            if (videoData.items && videoData.items.length > 0) {
              channelId = videoData.items[0].snippet.channelId;
              console.log(`Found channel ID from video ${vidId}: ${channelId}`);
              break;
            }
          }
        } catch (error) {
          console.error(`Error fetching channel ID from video ${vidId}:`, error);
          continue;
        }
      }
    }

    if (!channelId) {
      return NextResponse.json(
        { 
          error: 'Channel ID is required. Please provide one of the following:\n' +
                 '1. Set YOUTUBE_CHANNEL_ID in .env.local\n' +
                 '2. Set YOUTUBE_CHANNEL_USERNAME in .env.local\n' +
                 '3. Set YOUTUBE_VIDEO_ID in .env.local (will auto-detect channel from video)\n' +
                 '4. Or pass channelId, channelUsername, or videoId as query parameters.\n\n' +
                 'Note: The API will try to auto-detect your channel ID from videos in your codebase, but if that fails, you need to configure one of the above options.'
        },
        { status: 400 }
      );
    }

    // First, get the uploads playlist ID for the channel
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );

    if (!channelResponse.ok) {
      const errorData = await channelResponse.json();
      return NextResponse.json(
        { error: 'Failed to fetch channel data', details: errorData },
        { status: channelResponse.status }
      );
    }

    const channelData = await channelResponse.json();
    
    if (!channelData.items || channelData.items.length === 0) {
      return NextResponse.json(
        { error: 'Channel not found' },
        { status: 404 }
      );
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      return NextResponse.json(
        { error: 'Uploads playlist not found for this channel' },
        { status: 404 }
      );
    }

    // Fetch videos from the uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}&order=date`
    );

    if (!videosResponse.ok) {
      const errorData = await videosResponse.json();
      return NextResponse.json(
        { error: 'Failed to fetch videos', details: errorData },
        { status: videosResponse.status }
      );
    }

    const videosData = await videosResponse.json();

    // Transform the data to match our interface
    const videos: YouTubeVideo[] = videosData.items.map((item: any) => {
      const snippet = item.snippet;
      const videoId = snippet.resourceId.videoId;
      
      return {
        id: videoId,
        title: snippet.title,
        description: snippet.description,
        thumbnail: snippet.thumbnails.high?.url || snippet.thumbnails.default?.url,
        publishedAt: snippet.publishedAt,
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
        channelTitle: snippet.channelTitle,
      };
    });

    return NextResponse.json({
      videos,
      totalResults: videosData.pageInfo?.totalResults || videos.length,
      nextPageToken: videosData.nextPageToken,
    });

  } catch (error: any) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

