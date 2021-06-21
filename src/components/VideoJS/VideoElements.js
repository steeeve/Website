import styled from 'styled-components';

export const VideoJSContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify content: center;
    align-items: center;
    background: #f1f1f1;
    height: 100%;
`;

export const VideoText = styled.h1`
    color = #000;
    font-size: 2.5rem;
    margin-top: 150px;
    margin-bottom: 50px;

    @media screen and (max-width: 1000px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 700px) {
        font-size: 1.5rem;
    }
`;

export const VideoPlayerContainer = styled.div`
    margin-bottom: 100px;
`;


