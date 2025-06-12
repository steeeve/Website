//import React from 'react';
import { Stream } from '@cloudflare/stream-react';

const VideoPlayer = () => {
  // Replace with your actual Cloudflare Stream Video ID or signed token
  const videoId = '930056bbd876e355ae0314ba606914b9';

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>My Showcase Video</h2>
      <Stream
        controls // Enables play/pause, volume, etc.
        src={videoId} // Cloudflare Stream Video ID
        responsive // Automatically adjusts aspect ratio
        autoplay={false} // Disable autoplay for better UX
        muted={false} // Allow sound by default
        style={{ width: '100%', height: 'auto' }} // Ensure responsive sizing
      />
    </div>
  );
};

export default VideoPlayer;