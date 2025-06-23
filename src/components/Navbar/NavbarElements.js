import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#1ad688' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width:1100px;
`;

export const NavLogo = styled(LinkS)`
    color: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    transition: 0.8s all ease;
`;

export const MobileIcon = styled.div`
    display: none;

    transition: 0.8s all ease;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    }
`;




export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 50px;           /* Can play around w/ this */

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;

    &:hover {
        transition: all 0.5s ease-in-out;
        background: ${({scrollNav}) => (scrollNav ? '#04b86d' : 'transparent')};
    }
`;

export const NavLinks = styled(LinkS)`
    color: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height 100%;
    cursor: pointer;

    transition: color 0.8s ease, border-bottom 0.1s ease;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;




