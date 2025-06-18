import React from 'react';
import {Button} from '../ButtonElement';
//import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img , CustomButton} from './InfoElements';
/*
const navigate = useNavigate();

                                <a href="https://arxiv.org/abs/2209.09102">click here</a>


const handleClick = () => {
    navigate('/another-page');
};
*/

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, showButt, showNavButt}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                

                                <BtnWrap showButt = {showNavButt ? 1 : 0}>
                                <a href="https://link.springer.com/article/10.1007/s10032-023-00456-5">
                                    <CustomButton>See Paper</CustomButton>
                                </a>
                                </BtnWrap>


                                <BtnWrap showButt = {showButt ? 1 : 0}>
                                <Button to='resume'
                                smooth={true}
                                duration={1000}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark = {dark ? 1 : 0}
                                >{buttonLabel}</Button>
                                </BtnWrap>

            
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>  
        </>
    );
};

export default InfoSection;
