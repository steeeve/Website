import styled from 'styled-components';

export const ProjectContainer = styled.div`
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify content: center;
    align-items: center;
    background: #f1f1f1;   
`;

export const ProjectWrapper = styled.div`
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start
    align-items: flex-start;
`;


export const ProjectH1 = styled.h1`
    margin-top: 80px;
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 14px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-wifth: 480px) {
        font-size: 2rem;
    }
`;

export const InfoWrapper = styled.div`
    margin-top: 0px;
    margin-bottom: -100px;
    height: 100%
`;

