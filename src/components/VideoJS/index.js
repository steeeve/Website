import React from 'react';
import Clips from '../../videos/clips.mp4';
import Thumbnail from '../../images/skate.jpg';
import {VideoJSContainer, VideoText, VideoPlayerContainer} from './VideoElements';
import VideoPlayer from 'react-video-js-player';
import './VideoJS.css';

const VideoJS = () => {
    const videoSrc = Clips;
    const poster = Thumbnail;

    return (
        <VideoJSContainer>
            <VideoText>And heres me having some fun outside!</VideoText>
            <VideoPlayerContainer>
                <VideoPlayer
                    src = {videoSrc}
                    poster = {poster}
                    width = '620'
                    height = '620' />
            </VideoPlayerContainer>
        </VideoJSContainer>
    );
};

export default VideoJS;
