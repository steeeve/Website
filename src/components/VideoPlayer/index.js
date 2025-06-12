//import React from 'react';
import { Stream } from '@cloudflare/stream-react';
import { VideoText, VideoPlayerContainer, VideoContainer } from './VideoPlayerElements';

const VideoPlayer = () => {
  // Replace with your actual Cloudflare Stream Video ID or signed token
  const videoId = '930056bbd876e355ae0314ba606914b9';
  const thumbnailId = 'https://imagedelivery.net/GeniQxg0i9Pd0ajD8iFSPA/aa6c6cdb-3c4c-4075-32c7-32c05396de00/public?width=1280&height=720&fit=crop'; // Path to your local image in the public folder

  const handlePosterError = (e) => {
    console.error('Poster image failed to load:', e);
  };

  return (
    <VideoPlayerContainer>
      
      <VideoText>And heres me having some fun outside!</VideoText>

      <VideoContainer>
        <Stream
          controls // Enables play/pause, volume, etc.
          src={videoId} // Cloudflare Stream Video ID
          poster = {thumbnailId}
          onError={handlePosterError}
          responsive // Automatically adjusts aspect ratio
          autoplay={false} // Disable autoplay for better UX
          muted={false} // Allow sound by default
          style={{ width: '100%', height: 'auto' }} // Ensure responsive sizing
        />
      </VideoContainer>

    </VideoPlayerContainer>
  );
};

export default VideoPlayer;