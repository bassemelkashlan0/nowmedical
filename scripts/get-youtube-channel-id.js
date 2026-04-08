/**
 * Helper script to get YouTube Channel ID from a video ID
 * Usage: node scripts/get-youtube-channel-id.js <videoId>
 * 
 * Example: node scripts/get-youtube-channel-id.js zeArmG81bAE
 */

const videoId = process.argv[2];
const apiKey = process.env.YOUTUBE_API_KEY;

if (!videoId) {
  console.error('Please provide a video ID as an argument');
  console.log('Usage: node scripts/get-youtube-channel-id.js <videoId>');
  console.log('Example: node scripts/get-youtube-channel-id.js zeArmG81bAE');
  process.exit(1);
}

if (!apiKey) {
  console.error('Missing YOUTUBE_API_KEY in environment');
  console.log('Set it and retry, e.g. in PowerShell:');
  console.log('$env:YOUTUBE_API_KEY="YOUR_KEY_HERE"');
  process.exit(1);
}

async function getChannelIdFromVideo(videoId) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Error:', error);
      return null;
    }

    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const video = data.items[0];
      const channelId = video.snippet.channelId;
      const channelTitle = video.snippet.channelTitle;
      
      console.log('\n✅ Success!');
      console.log(`Video ID: ${videoId}`);
      console.log(`Video Title: ${video.snippet.title}`);
      console.log(`Channel Title: ${channelTitle}`);
      console.log(`Channel ID: ${channelId}`);
      console.log('\n📝 Add this to your .env.local file:');
      console.log(`YOUTUBE_CHANNEL_ID=${channelId}`);
      console.log('\nOr use the video ID to auto-detect:');
      console.log(`YOUTUBE_VIDEO_ID=${videoId}`);
      
      return channelId;
    } else {
      console.error('Video not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching video:', error);
    return null;
  }
}

getChannelIdFromVideo(videoId);

