import styled from 'styled-components';

export const ResumeContainer = styled.div`
    height: 1400px;
    display: flex;
    flex-direction: column;
    justify content: center;
    align-items: center;
    background: #f1f1f1;

    @media screen and (max-width: 800px) {
        height: 1400px;
    }

    @media screen and (max-width: 768px) {
        height: 1500px;
    }

    @media screen and (max-width: 700px) {
        height: 1500px;
    }

    @media screen and (max-width: 600px) {
        height: 1550px;
    }

    @media screen and (max-width: 540px) {
        height: 1650px;
    }
`;


export const ResumeWrapper = styled.div`
    max-width: 1000px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start
    align-items: flex-start;

    @media screen and (max-width: 1000px) {
        /* display resume contents on smaller screen */
        margin-left: 8px;
        margin-right: 8px;
    }

    @media screen and (max-width: 768px) {
        /* display resume contents on even smaller screen */
        margin-left: 4px;
        margin-right: 4px;
    }
`;

export const ResumeH1 = styled.h1`
    margin-top: 32px;
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-wifth: 480px) {
        font-size: 2rem;
    }
`;

export const TextWrapper = styled.div`
    max-width: 100%;
    padding-top: 24px;
    padding-bottom: 24px;
`;

export const Headline = styled.h2`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')}; 

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const SmallTitle = styled.h1`
    margin-left: 24px;
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')}; 

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`;

export const SmallTitleDesc = styled.p`
    margin-left: 48px;
    max-width: 100%;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 24px;
    color: '#010606';
`;

export const CourseworkWrapper = styled.ul`
    list-style-type: circle;
    list-style-position: outside;
    margin-left: 100px;
`;

export const CourseworkItem = styled.li`
    margin: 5px;
`;