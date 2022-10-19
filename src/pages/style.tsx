import styled from "styled-components";

const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: 285px;

    & > :last-child {
        color: #00A7FD;
        font-weight: bold;
    }
`;

export {
    Container
}