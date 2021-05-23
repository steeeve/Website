import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, WebsiteRights, WebsiteRightsWrap, Rights } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social</FooterLinkTitle>
                            <FooterLink to='/'>Github</FooterLink>
                            <FooterLink to='/'>LinkedIn</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <WebsiteRights>
                            <WebsiteRightsWrap>
                                <Rights>
                                    Steven Chang © 2021
                                </Rights>
                            </WebsiteRightsWrap>
                        </WebsiteRights>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
