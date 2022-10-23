import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import PokeContainer from "../../components/PokeContainer";
import PokeFilter from "../../components/PokeFilter";
import { GET_POKEMONS_QUERY } from "../../services/getPokemons";
import { FILTER_BY_TYPE } from "../../utils/filterUtils";
import {
    ListContainer,
    PageTitle,
    PokeList, TextContainer,
    TotalEntries,
    SectionContainer,
} from "./style";

export interface Pokemon {
    id: number
    name: string,
    image: string
    types: string[],
    maxCP: number,
    number: string,
}

export default function ListPage() {
    const [CPValue, setCPValue] = useState<number[]>([329, 2512]);
    const [filteredTypes, setFilteredTypes] = useState<[]>([]);
    const [filteredPokemons, setFilteredPokemons] = useState<[]>([]);
    const [filterCheck, setFilterCheck] = useState(false)
    
    let { data } = useQuery(GET_POKEMONS_QUERY, {
        variables: { first: 151 },
    });

    let pokemons = data?.pokemons;

    useEffect(() => {
        if (pokemons) {
            FILTER_BY_TYPE(pokemons, filteredTypes, setFilteredPokemons);
        }
        
    }, [filterCheck, filteredTypes, pokemons]);

    return (
        <SectionContainer>
            <ListContainer>
                <TextContainer>
                    <PageTitle>Lista de pokémons</PageTitle>
                    <TotalEntries>Mostrando {filteredPokemons?.length} pokémons</TotalEntries>
                </TextContainer>
                <PokeList>
                    {filteredPokemons?.map((pokemon: Pokemon) => (
                        <PokeContainer
                            key={pokemon?.id}
                            id={pokemon?.id}
                            name={pokemon?.name}
                            image={pokemon?.image} 
                            types={pokemon?.types}
                            maxCP={pokemon?.maxCP}
                            number={pokemon?.number}
                        />
                    ))}
                </PokeList>
            </ListContainer>
            <PokeFilter
                CPValue={CPValue}
                setCPValue={setCPValue}
                filteredTypes={filteredTypes}
                setFilteredTypes={setFilteredTypes}
                filterCheck={filterCheck}
                setFilterCheck={setFilterCheck}
            />
        </SectionContainer>
    );
}