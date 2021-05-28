import styled from 'styled-components';

export const VideoJSContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify content: center;
    align-items: center;
    background: #f1f1f1;
    height: 1000px;

    @media screen and (max-width: 768px) {
        height: 1500px;
    }

    @media screen and (max-width: 480px) {
        height: 1500px;
    }
`;

export const VideoText = styled.h1`
    color = #000;
    font-size: 2.5rem;
    margin-top: 75px;
    margin-bottom: 50px;

    @media screen and (max-wifth: 480px) {
        font-size: 2rem;
    }
`;

export const VideoPlayerContainer = styled.div`
    margin-bottom: 50px;
`;


