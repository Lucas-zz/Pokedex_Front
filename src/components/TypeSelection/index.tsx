import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { CheckboxContainer, CustomLabel } from "./style";

export default function TypeSelection({ type, filteredTypes, setFilteredTypes, filterCheck, setFilterCheck }: any) {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    let types = filteredTypes;

    useEffect(() => {
        if (checked && !types?.includes(type)) {
            types?.push(type);
            setFilterCheck(!filterCheck);
        }
        if (!checked) {
            const index = types?.indexOf(type);
            if (index > -1) types?.splice(index, 1);
            setFilterCheck(!filterCheck);
        }
    
        setFilteredTypes(types);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

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