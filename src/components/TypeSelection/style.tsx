import { FormControlLabel } from "@mui/material";
import styled from "styled-components";

const CheckboxContainer = styled.div`
    width: 83px;
    height: 21px;

    margin-right: 20px;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 1400px) {
        margin: 5px 0;
    }

    @media (max-width: 650) {
        & >>> span {
            font-size: 8px !important;
        }
    }
`;

const CustomLabel = styled(FormControlLabel)({
    '& .MuiFormControlLabel-label': {
        '&:focus, &:hover': {
            textShadow: '0px 0px 6px #00C1FD80',
            color: '#00A7FD',
        },
    }
});

export {
    CheckboxContainer,
    CustomLabel
}