import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: ${({showButt}) => (showButt ? 'red' : 'blue')};
    background: ${({lightBg}) => (lightBg ? '#f1f1f1' : '#1f1f1f')};
    height: 100%

`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    // justify-content: center;

    @media screen and (max-width: 768px) {
        height: 1200px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 700px;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')}; 

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 700px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 768px) {
        
    }
`;

export const CustomButton = styled.button`
  padding: 12px 24px;
  background-color: #01BF71; /* Vibrant blue */
  color: #ffffff; /* White text for contrast */
  border: none;
  border-radius: 6px; /* Rounded corners */
  font-size: 16px;
  font-weight: 500; /* Medium weight for readability */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #069c5d; /* Darker blue on hover */
    transform: translateY(-2px); /* Subtle lift effect */
  }

  &:active {
    transform: translateY(0); /* Reset lift on click */
  }

  &:focus {
    outline: 2px solid #80bdff; /* Accessible focus state */
    outline-offset: 2px;
  }
`;

export const BtnWrap = styled.div`
    display: ${({showButt}) => (showButt ? 'flex' : 'none')};
    justify-content: flex-start;
`;

export const ImgWrap = styled.div` 
    max-width: 800px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
