import { Slider } from "@mui/material";
import styled from "styled-components";


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

    @media (max-width: 900px) {
        width: 332px;
        height: 470px;
    }

    @media (max-width: 650px) {
        align-self: center;
        align-items: center;
        background-color: inherit;

        margin-top: calc(35vh * 10rem);
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
    
    @media (max-width: 650) {
        max-width: 40px;
    }
`;

const SliderContainer = styled.div`
    margin: 0 40px;

    @media (max-width: 900px) {

    }
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

const Value = styled.div`
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
    
    @media (max-width: 1400px) {
        padding-right: 0;
    }
`;

const GridOfTypes = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: auto auto auto;

    margin-top: 10px;

    @media (max-width: 900px) {
        margin: auto;
        
        grid-template-columns: auto auto;
    }
    
    @media (max-width: 650) {
        width: 80px;
        
        margin: auto;
        
        grid-template-columns: auto auto;
    }
`;

export {
    FilterContainer,
    Subtitle,
    CustomSlider,
    SliderContainer,
    SliderValues,
    Value,
    PokeTypes,
    GridOfTypes
}