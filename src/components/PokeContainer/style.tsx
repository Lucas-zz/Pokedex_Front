import styled from "styled-components";

const Container = styled.div`
    width: 240px;

    border-radius: 20px;
    background-color: #FFF;
    opacity: 1;
`;

const InfoContainer = styled.div`
    margin: 8px;

    display: grid;
    grid-template-columns: 64px auto auto;
    align-items: center;
`;

const PokeImage = styled.img`
    width: 64px;
    height: 64px;

    background-repeat: no-repeat;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #DBDBDB;
    border-radius: 14px;
`;

const PokeInfo = styled.div`
    width: auto;
    height: 100%;

    margin-left: 15px;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

const PokeName = styled.div`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 1;
    opacity: 1;

    padding-top: 5px;
`;

const PokeTypes = styled.div`
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0;
    opacity: 1;

    color: #939393;
`;

const PokeCP = styled.div`
    width: 54px;
    height: 19px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0;
    opacity: 1;

    margin-top: 6px;
    border-radius: 4px;

    color: #FFF;
    background-color: ${(props) => props.color};
`;

const PokeNumber = styled.div`
    display: flex;
    align-self: flex-start;
    justify-self: flex-end;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0;
    line-height: 1;
    opacity: 1;

    color: #939393;

    padding-top: 7px;
    padding-right: 10px;
`;

export {
    Container,
    InfoContainer,
    PokeImage,
    PokeInfo,
    PokeName,
    PokeTypes,
    PokeCP,
    PokeNumber
}