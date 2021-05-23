import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 0px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: row;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    margin-right: 20px;
    margin: 32px;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width:420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;


export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-right: 160px;
`;


export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    margin-left: 0px;
    margin-right: 20px;
    font-size: 14px;

    &.hover {
        color: #01bf71
        transition: 0.3s ease-out;
    }
`;


export const WebsiteRights = styled.section`
    max-width: 1000px;
    width: 100%
`;

export const WebsiteRightsWrap = styled.section`
    display: flex;

    align-items: left;
    max-width: 1100px;
    margin-top: 40px;

`;

export const Rights = styled.small`
    color: #fff;
    margin-top: 32px;
    margin-left: -192px;
`;