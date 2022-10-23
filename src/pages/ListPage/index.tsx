import { useQuery } from "@apollo/client";
import { useState } from "react";
import PokeContainer from "../../components/PokeContainer";
import PokeFilter from "../../components/PokeFilter";
import Load from "../../components/Load";
import { GET_POKEMONS_QUERY } from "../../services/getPokemons";
import {
    ListContainer,
    PageTitle,
    PokeList, TextContainer,
    TotalEntries,
    SectionContainer,
} from "./style";

export interface Pokemon {
    id: number,
    name: string,
    image: string,
    types: string[],
    maxCP: number,
    number: string,
}

export default function ListPage() {
    const [isLoading, setLoading] = useState(false);

    const { data } = useQuery(GET_POKEMONS_QUERY, {
        variables: { first: 200 },
    });

    const pokemons = data?.pokemons;

    const selectedTypes = ['Normal', 'Ice'];

    const filteredPokemons = []

    console.log(pokemons);

    console.log(pokemons?.filter( (e: any) => {
        return e.indexOf(e) < 0;
    }, [pokemons.types]))

    return (
               
        <SectionContainer>
            <ListContainer>
                <TextContainer>
                    <PageTitle>Lista de pokémons</PageTitle>
                    <TotalEntries>Mostrando {pokemons?.length} pokémons</TotalEntries>
                </TextContainer>
                {isLoading
                    ? <Load />
                    : <PokeList>
                        {pokemons?.map((pokemon: any) => (
                            <PokeContainer
                                key={pokemon?.id}
                                name={pokemon?.name}
                                image={pokemon?.image}
                                types={pokemon?.types}
                                maxCP={pokemon?.maxCP}
                                number={pokemon?.number}
                            />
                        ))}
                    </PokeList>
                }
            </ListContainer>
            <PokeFilter />
        </SectionContainer>
    );
}