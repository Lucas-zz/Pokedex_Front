import styled from "styled-components";

const Container = styled.nav`
    width: 283px;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const NavButtons = styled.div`
    margin-left: 2vw;
    padding-top: 8vh;
    padding-bottom: 8vh;

    display: flex;
    flex-direction: column;

    & > a {
        padding-left: 10px;
    }
`;

const Logo = styled.div`
    width: 283px;

    display: flex;

    padding-left: 2vw;

    & > img {
        width: 52px;
        height: 52px;
    }
`;

const LogoTextContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 10px;

    & > :first-child {
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #333;
        opacity: 1;
    }

    & > :last-child {
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #939393;
        opacity: 1;
    }
`;

const Version = styled.div`
    width: 100%;

    padding-top: 8vh;
    padding-left: 3vw;

    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #939393;
    opacity: 1;
`;

export {
    Container,
    NavButtons,
    Logo,
    LogoTextContainer,
    Version
}