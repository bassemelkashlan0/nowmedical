# YouTube Channel Setup - Quick Fix

## Problem
You're getting an error: "Channel ID or Channel Username is required"

## Solution - Choose One Option:

### Option 1: Auto-Detect from Video (Easiest - Recommended)

The API will automatically try to detect your channel ID from videos in your codebase. However, if that fails, uncomment this line in `.env.local`:

```env
YOUTUBE_VIDEO_ID=zeArmG81bAE
```

This uses one of your existing video IDs to automatically find your channel ID.

### Option 2: Find Your Channel ID Manually

1. **Method A: From YouTube Studio**
   - Go to [YouTube Studio](https://studio.youtube.com/)
   - Click "Settings" (gear icon) → "Channel" → "Advanced settings"
   - Your Channel ID is displayed there

2. **Method B: From Your YouTube Channel URL**
   - Visit your YouTube channel
   - If the URL is: `https://www.youtube.com/channel/UCxxxxxxxxxxxxx`
   - Your Channel ID is: `UCxxxxxxxxxxxxx`

3. **Method C: Use the Helper Script**
   ```bash
   node scripts/get-youtube-channel-id.js zeArmG81bAE
   ```
   This will show you your Channel ID and instructions to add it to `.env.local`

### Option 3: Use Channel Username/Handle

If your channel has a custom handle like `@yourchannelname`, add this to `.env.local`:

```env
YOUTUBE_CHANNEL_USERNAME=@yourchannelname
```

Or without the @ symbol:
```env
YOUTUBE_CHANNEL_USERNAME=yourchannelname
```

## Update .env.local

Edit your `.env.local` file and uncomment/add ONE of these options:

```env
# Option 1: Use video ID (auto-detects channel)
YOUTUBE_VIDEO_ID=zeArmG81bAE

# Option 2: Use channel ID directly
# YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxx

# Option 3: Use channel username
# YOUTUBE_CHANNEL_USERNAME=@yourchannelname
```

## After Updating .env.local

1. **Save the file**
2. **Restart your development server**:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

## Verify It Works

1. Visit: `http://localhost:3000/patient-experience`
2. You should see your YouTube videos loading
3. If you still see an error, check the browser console for details

## Troubleshooting

### Error: "Channel not found"
- Double-check your Channel ID is correct
- Make sure your channel is public
- Try using a video ID instead (Option 1)

### Error: "Failed to fetch videos"
- Check your API key is correct in `.env.local`
- Verify the API key has YouTube Data API v3 enabled
- Check your YouTube API quota hasn't been exceeded

### No videos showing
- Make sure your YouTube channel has published videos
- Verify the videos are public
- Check the browser console for any errors

## Need Help?

If you're still having issues:
1. Check the browser console for detailed error messages
2. Check the server logs for API errors
3. Verify your YouTube API key is valid and has the right permissions

