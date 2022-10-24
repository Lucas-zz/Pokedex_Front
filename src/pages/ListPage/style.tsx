import styled from "styled-components";

const SectionContainer = styled.section`
    height: calc(100vh - 50px);

    display: flex;

    margin-top: 50px;

    @media (max-width: 1400px) {
        height: 100%;

        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-start;
        
        margin-top: 0px;
    }

    @media (max-width: 967px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-start;

        margin-top: 0px;
    }

    @media (max-width: 650px) {
        width: 75%;
        height: 100%;

        align-items: center;
        justify-content: center;
    }
`;

const ListContainer = styled.div`
    height: calc(100vh - 50px);

    display: flex;
    flex-direction: column;

    border-radius: 50px 50px 0 0;

    background-color: #F4F4F4;

    padding-right: 20px;

    @media (max-width: 1400px) {
        height: 50vh;
    }

    @media (max-width: 650px) {
        min-height: 100%;

        align-items: flex-start;
        justify-content: flex-start;

        margin-right: 20px;
    }
`;

const TextContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 40px;
    margin-left: 40px;
    
    @media (max-width: 1400px) {
        margin-top: 20px;
        margin-left: 40px;
    }

    @media (max-width: 650px) {
        margin-top: 20px;
        margin-left: 5vw;

        gap: 5px;
    }
`;

const PageTitle = styled.div`
    width: 100%;

    font-size: 35px;
    font-weight: bold;
    letter-spacing: 0;
    color: #333;
    opacity: 1;

    text-align: left;
    
    @media (max-width: 1400px) {
        font-size: 24px;
    }  

    @media (max-width: 650) {

        font-size: 16px;
    }
`;

const TotalEntries = styled.div`
    width: auto;

    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0;
    color: #00A7FD;
    opacity: 1;

    text-align: left;
`;

const PokeList = styled.div<any>`
    width: 100%;

    ${props => props.message
        ?`
            width: 822px;
            display: flex;
            justify-content: center;
            align-items: center;
        `
        :`
            display: grid;
            grid-template-columns:240px 240px 240px;
        `
    };

    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden;

    gap: 15px;

    padding-left: 40px;
    padding-right: 20px;
    margin: 40px 0;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 9px;
    }

    ::-webkit-scrollbar-thumb {
        background: #DBDBDB;
        border-radius: 9px;
    }

    @media (max-width: 1600px) {
        ${props => props.message
            ?`
                width: 567px;
                display: flex;
                justify-content: center;
                align-items: center;
                
            `
            :`
                display: grid;
                grid-template-columns: 240px 240px;
            `
        };
    }

    @media (max-width: 1400px) {
        margin: 10px 0;
    }

    @media (max-width: 900px) {
        ${props => props.message
            ?`
                width: 312px;
                display: flex;
                justify-content: center;
                align-items: center;
                
            `
            :`
                display: grid;
                grid-template-columns: 240px;
            `
        };
    }
    @media (max-width: 650px) {
        width: 70vw;

        margin: 10px 0px;
    }

`;

const Message = styled.div`
    font-size: 16px;
    letter-spacing: 0;
    line-height: 2;
    opacity: 1;

    text-align: center;
    
    padding: 22px;
    margin-top: 20px;

    background-color: #eaeaea;

    & > span {
        font-weight: bold;
        color: #00A7FD
    }

    @media (max-width: 900px) {
        margin-top: 0;
    }
`;

export {
    ListContainer,
    TextContainer,
    PageTitle,
    TotalEntries,
    PokeList,
    SectionContainer,
    Message
}