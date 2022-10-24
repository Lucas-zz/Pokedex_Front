import styled from "styled-components";

const Button = styled.button<any>`
    height: 100%;

    border: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    align-items: center;
    color: #939393;

    padding: 3vh 0;

    ${props => props.active
        ? 'color: #00A7FD; text-shadow: 0px 0px 6px #00C1FD80; font-weight: bold;'
        : ''};

    & > span {
        font-size: 16px;
        padding-left: 10px;
        text-align: left;
        letter-spacing: 0px;
        opacity: 1;

        padding-top: 2.5px;
    
        @media(max-width: 650px) {
            display: none;
        }  
    }

    &:hover {
        ${props => props.active ? '' : 'text-shadow: 0px 0px 6px #00C1FD80; color: #00C1FD80;'}
    }

    & > div {
        width: 36px;
        height: 36px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;

        & > img {
            width: 52px;
            height: 52px;

            display: flex;
            align-items: center;
            justify-content: center;

            ${props => props.active ? '' : 'display: none;'}

            position: absolute;
            z-index: 1;
        }

        & > :last-child {
            width: 24px;
            height: 24px;

            ${props => props.active ? 'color: #fff;' : ''}

            position: absolute;
            z-index: 2;
        }
    }

    @media (max-width: 650px) {
        padding: 15px 0;
    }
`;

export {
    Button,
}