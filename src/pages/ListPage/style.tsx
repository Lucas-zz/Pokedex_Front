import { Slider } from "@mui/material";
import styled from "styled-components";

const SectionContainer = styled.section`
    width: 100%;
    height: calc(100vh - 50px);

    display: flex;

    margin-top: 50px;

    @media (max-width: 1400px) {
        height: 100vh;

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
`;

const PageTitle = styled.div`
    font-size: 35px;
    font-weight: bold;
    letter-spacing: 0;
    color: #333;
    opacity: 1;

    text-align: left;
    
    @media (max-width: 1400px) {
        font-size: 24px;
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

const PokeList = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: 240px 240px 240px;

    scroll-behavior: smooth;
    overflow-y: scroll;

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
        grid-template-columns: 240px 240px;
    }

    @media (max-width: 1400px) {
        margin: 10px 0;
    }

`;

const FilterContainer = styled.aside`
    width: 100%;
    height: 556px;
    background-color: #F4F4F4;

    margin-left: 5vw;
    margin-right: 5vw;

    border-radius: 50px;

    align-self: center;

    @media (max-width: 1400px) {
        width: 587px;
        height: 396px;

        margin-left: 0;
        margin-right: 0;
        margin-bottom: 25px;
    }

    @media (max-width: 967px) {
        margin-left: 0;
        margin-right: 0;
    }
`;

const Subtitle = styled.span`
    width: auto;

    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0;
    color: #939393;
    opacity: 1;

    text-align: left;

    margin-top: 20px;

    @media (max-width: 1400px) {
        margin: 0;
    }
`;

const SliderContainer = styled.div`
    margin: 0 40px;
`;

const CustomSlider = styled(Slider)({
    '& .MuiSlider-rail': {
        color: '#DBDBDB !important',
        border: 'none',
        height: 12,
        opacity: 1,
    },
    '& .MuiSlider-track': {
        color: '#04E762 !important',
        border: 'none',
        height: 12,
        opacity: 1,
    },
    '& .MuiSlider-thumb': {
        height: 18,
        width: 18,
        backgroundColor: '#fff',
        boxShadow: '0px 0px 6px #00000029',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: '0px 0px 6px #00000029',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#00A7FD',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

const SliderValues = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px;
`;

const Values = styled.div`
    width: 77px;
    height: 34px;

    border: 2px solid #DBDBDB;
    border-radius: 10px;
    line-height: 0;
    opacity: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 2px;
    
    @media (max-width: 1400px) {
        height: 24px;
    }
`;

const PokeTypes = styled.div`
    width: 100%;

    margin: 45px 0;
    padding: 0 40px;
    
    @media (max-width: 1400px) {
        margin: 10px 0;
    }
`;

const GridOfTypes = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: auto auto auto;

    margin-top: 10px;
`;

export {
    ListContainer,
    TextContainer,
    PageTitle,
    TotalEntries,
    PokeList,
    FilterContainer,
    SectionContainer,
    Subtitle,
    CustomSlider,
    SliderContainer,
    SliderValues,
    Values,
    PokeTypes,
    GridOfTypes
}