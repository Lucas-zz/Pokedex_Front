import { useState } from "react";
import PokeContainer from "../../components/PokeContainer";
import TypeSelection from "../../components/TypeSelection";
import {
    FilterContainer,
    ListContainer,
    PageTitle,
    PokeList, TextContainer,
    TotalEntries,
    SectionContainer,
    Subtitle,
    CustomSlider,
    SliderContainer,
    SliderValues,
    Values,
    PokeTypes,
    GridOfTypes
} from "./style";

export interface Pokemon {
    name: string,
    types: string[],
    maxCP: number,
    number: string,
}

export default function ListPage() {
    let pokemons = [
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 951,
            number: '001',
        },
        {
            name: 'Ivysaur',
            types: ['Grass', 'Poison'],
            maxCP: 1483,
            number: '002',
        },
        {
            name: 'Bulbasaur',
            types: ['Grass', 'Poison'],
            maxCP: 2392,
            number: '003',
        },
    ];

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

    const [value, setValue] = useState<number[]>([329, 2512]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <SectionContainer>
            <ListContainer>
                <TextContainer>
                    <PageTitle>Lista de pokémons</PageTitle>
                    <TotalEntries>Mostrando {pokemons.length} pokémons</TotalEntries>
                </TextContainer>
                <PokeList>
                    {pokemons.map((pokemon: Pokemon) => (
                        <PokeContainer
                            name={pokemon.name}
                            types={pokemon.types}
                            maxCP={pokemon.maxCP}
                            number={pokemon.number}
                        />
                    ))}
                </PokeList>
            </ListContainer>
            <FilterContainer>
                <TextContainer>
                    <PageTitle>Filtro</PageTitle>
                    <Subtitle>maxCP</Subtitle>
                </TextContainer>
                <SliderContainer>
                    <CustomSlider
                        getAriaLabel={() => 'maxCP range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        max={3000}
                        min={0}
                    />
                </SliderContainer>
                <SliderValues>
                    <Values>
                        <span>{value[0]}</span>
                    </Values>
                    <Values>
                        <span>{value[1]}</span>
                    </Values>
                </SliderValues>
                <PokeTypes>
                    <Subtitle>Tipos</Subtitle>
                    <GridOfTypes>
                        {AllTypes.map((type) =>
                            <TypeSelection type={type} />
                        )}
                    </GridOfTypes>
                </PokeTypes>
            </FilterContainer>
        </SectionContainer>
    );
}