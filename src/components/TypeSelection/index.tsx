import { Checkbox } from "@mui/material";
import { useState } from "react";
import { CheckboxContainer, CustomLabel } from "./style";

export default function TypeSelection({ type }: any) {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <CheckboxContainer>
            <CustomLabel
                sx={{
                    color: checked ? '#00A7FD' : '',
                    fontWeight: checked ? 'bold' : '',
                    textShadow: checked ? '0px 0px 6px #00C1FD80' : '',
                }}
                value="start"
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label={type}
                labelPlacement="end"
            />
        </CheckboxContainer>
    );
}