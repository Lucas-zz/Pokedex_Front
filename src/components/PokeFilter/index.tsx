import TypeSelection from "../TypeSelection";
import {
    CustomSlider,
    FilterContainer,
    GridOfTypes,
    PokeTypes,
    SliderContainer,
    SliderValues,
    TextContainer,
    PageTitle,
    Subtitle,
    Value
} from "./style";


export default function PokeFilter(
    {
        CPValue,
        setCPValue,
        filteredTypes,
        setFilteredTypes,
        filterCheck,
        setFilterCheck,
        minMaxCPValue,
    }: any) {
    
    const AllTypes = [
        'Normal',
        'Fire',
        'Fighting',
        'Water',
        'Flying',
        'Grass',
        'Poison',
        'Eletric',
        'Ground',
        'Psychic',
        'Rock',
        'Ice',
        'Bug',
        'Dragon',
        'Ghost',
        'Dark',
        'Steel',
        'Fairy'
    ]

    const handleChange = (event: Event, newValue: number | number[]) => {
        setCPValue(newValue as number[]);
    };

    return (
        <FilterContainer>
            <TextContainer>
                <PageTitle>Filtro</PageTitle>
                <Subtitle>maxCP</Subtitle>
            </TextContainer>
            <SliderContainer>
                <CustomSlider
                    getAriaLabel={() => 'maxCP range'}
                    value={CPValue}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    max={minMaxCPValue[1]}
                    min={minMaxCPValue[0]}
                />
            </SliderContainer>
            <SliderValues>
                <Value>{CPValue[0]}</Value>
                <Value> {CPValue[1]}</Value>
            </SliderValues>
            <PokeTypes>
                <Subtitle>Tipos</Subtitle>
                <GridOfTypes>
                    {AllTypes.map((type) =>
                        <TypeSelection
                            key={type}
                            type={type}
                            filteredTypes={filteredTypes}
                            setFilteredTypes={setFilteredTypes}
                            filterCheck={filterCheck}
                            setFilterCheck={setFilterCheck}
                        />
                    )}
                </GridOfTypes>
            </PokeTypes>
        </FilterContainer>
    );
}