import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > :last-child {
        color: #00A7FD;
        font-weight: bold;
    }
`;

export {
    Container
}