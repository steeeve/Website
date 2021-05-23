import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false);
 
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Steven,</HeroH1>
                <HeroP>heres a bit about myself and what I like doing</HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} 
                    offset={-80}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact="true"
                    onMouseLeave={onHover}
                    primary="true"
                    dark="false"
                    >
                        About {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
