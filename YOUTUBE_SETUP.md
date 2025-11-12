# YouTube Integration Setup Guide

This guide explains how to configure the YouTube video integration for the patient experience page.

## Configuration Steps

### 1. Get Your YouTube Channel ID

You have several options to find your YouTube Channel ID:

**Option A: From YouTube Studio**
1. Go to [YouTube Studio](https://studio.youtube.com/)
2. Click on "Settings" (gear icon) in the left sidebar
3. Click on "Channel" → "Advanced settings"
4. Your Channel ID will be displayed under "Channel settings"

**Option B: From Your YouTube Channel URL**
- If your channel URL is: `https://www.youtube.com/channel/UCxxxxxxxxxxxxxxxxxxxxxx`
- Your Channel ID is: `UCxxxxxxxxxxxxxxxxxxxxxx`

**Option C: Using YouTube Username/Handle**
- If your channel URL is: `https://www.youtube.com/@yourchannelname`
- Your channel username/handle is: `@yourchannelname` or `yourchannelname`

### 2. Configure Environment Variables

Edit the `.env.local` file in the root of your project and add your Channel ID or Username:

```env
# YouTube API Configuration
YOUTUBE_API_KEY=AIzaSyA0bhoP_9y8-LyvgW8FYpl-DcEaQEQpqkA

# Option 1: Use Channel ID (Recommended)
YOUTUBE_CHANNEL_ID=your_channel_id_here

# Option 2: Use Channel Username/Handle (Alternative)
# YOUTUBE_CHANNEL_USERNAME=your_channel_username
```

### 3. Restart Your Development Server

After updating `.env.local`, restart your Next.js development server:

```bash
npm run dev
```

## How It Works

1. The API route (`/api/youtube-videos`) fetches videos from your YouTube channel using the YouTube Data API v3
2. Videos are displayed in a grid layout on the `/patient-experience` page
3. Users can click on any video thumbnail to open it on YouTube
4. The "Show More/Show Less" button allows users to toggle between viewing 9 videos and all videos

## Troubleshooting

### Error: "Channel ID is required"
- Make sure you've set either `YOUTUBE_CHANNEL_ID` or `YOUTUBE_CHANNEL_USERNAME` in your `.env.local` file
- Restart your development server after making changes

### Error: "YouTube API key is not configured"
- Verify that `YOUTUBE_API_KEY` is set in your `.env.local` file
- Make sure the API key is valid and has the YouTube Data API v3 enabled

### Error: "Channel not found"
- Double-check your Channel ID or Username
- Make sure your channel is public
- Try using the Channel ID instead of Username if Username lookup fails

### No videos are showing
- Make sure your YouTube channel has published videos
- Check that the videos are public
- Verify your API key has the necessary permissions

## API Quota

The YouTube Data API has a default quota of 10,000 units per day. Each API call consumes quota units:
- Channel lookup: ~1 unit
- Fetching playlist items: ~1 unit per call
- Searching for channels: ~100 units per call

If you hit quota limits, you may need to:
1. Request a quota increase from Google
2. Implement caching to reduce API calls
3. Reduce the number of videos fetched at once

## Production Deployment

When deploying to production (e.g., Vercel), make sure to:
1. Add the environment variables to your hosting platform's environment variables settings
2. Do NOT commit `.env.local` to version control (it's already in `.gitignore`)
3. Restart your application after adding environment variables

