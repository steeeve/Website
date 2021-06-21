import styled from 'styled-components';

export const ProjectContainer = styled.div`
    height: 2400px;         // MAKE TALLER/SHORTER                 
    display: flex;
    flex-direction: column;
    justify content: center;
    align-items: center;
    background: #f1f1f1;

    @media screen and (max-width: 768px) {
        height: 3200px;
    }

    @media screen and (max-width: 480px) {
        height: 3000px; 
    }
`;


export const ProjectH1 = styled.h1`
    margin-top: 80px;
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 14px;

    @media screen and (max-wifth: 480px) {
        font-size: 2rem;
    }
`;

export const InfoWrapper = styled.div`
    margin-top: 0px;
    margin-bottom: -100px;
    height: 600px;
    

    @media screen and (max-width: 768px) {
        height: 1000px;
    }
`;

