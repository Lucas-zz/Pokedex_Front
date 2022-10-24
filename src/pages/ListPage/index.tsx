import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import PokeContainer from "../../components/PokeContainer";
import PokeFilter from "../../components/PokeFilter";
import useAlert from "../../hooks/useAlert";
import { GET_POKEMONS_QUERY } from "../../services/getPokemons";
import { FILTER_BY_MAX_CP, FILTER_BY_TYPE, GET_MIN_AND_MAX_CP } from "../../utils/filterUtils";
import {
    ListContainer,
    PageTitle,
    PokeList,
    TextContainer,
    TotalEntries,
    SectionContainer,
    Message
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
    const { setMessage } = useAlert();

    const [CPValue, setCPValue] = useState<number[]>([329, 2512]);
    const [filteredTypes, setFilteredTypes] = useState<[]>([]);
    const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
    const [filterCheck, setFilterCheck] = useState<Boolean>(false)
    const [minMaxCPValue, setMinMaxCPValue] = useState<number[]>([0, 4000]);
    const [hasMessage, setInitialMessage] = useState<Boolean>(true);
    
    setMessage(null);
    
    let { data, loading, error } = useQuery(GET_POKEMONS_QUERY, {
        variables: { first: 5000 },
    });

    // if (error) {
    //     setMessage({
    //         type: 'error',
    //         text: "Algo de errado acontenceu. Tente novamente em alguns momentos!"
    //     });
    // }

    let pokemons: Pokemon[] = data?.pokemons;
    let filteredPokemonsByType: Pokemon[];
    let filteredPokemonsByMaxCP: Pokemon[];

    useEffect(() => {
        if (pokemons) {
            GET_MIN_AND_MAX_CP(pokemons, setMinMaxCPValue);
        }
    }, [pokemons]);

    useEffect(() => {
        if (pokemons) {
            filteredPokemonsByType = FILTER_BY_TYPE(pokemons, filteredTypes);
            filteredPokemonsByMaxCP = FILTER_BY_MAX_CP(filteredPokemonsByType, CPValue);
            setFilteredPokemons(filteredPokemonsByMaxCP);
        }

        if (filteredTypes?.length !== 0) setInitialMessage(false);
        if (filteredTypes?.length === 0) setInitialMessage(true);
        
    }, [filterCheck, filteredTypes, pokemons, CPValue]);

    return (
        <SectionContainer>
            <ListContainer>
                <TextContainer>
                    <PageTitle>Lista de pokémons</PageTitle>
                    <TotalEntries>Mostrando {filteredPokemons?.length} pokémons</TotalEntries>
                </TextContainer>
                <PokeList message={hasMessage}>
                    {hasMessage
                        ? <Message>Selecione algum <span>TIPO</span> para que os <span>POKÉMONS</span> correspondentes apareçam aqui!</Message>
                        : filteredPokemons?.map((pokemon: Pokemon) => (
                            <PokeContainer
                                key={pokemon?.id}
                                id={pokemon?.id}
                                name={pokemon?.name}
                                image={pokemon?.image} 
                                types={pokemon?.types}
                                maxCP={pokemon?.maxCP}
                                number={pokemon?.number}
                            />
                        ))
                    }
                </PokeList>
            </ListContainer>
            <PokeFilter
                CPValue={CPValue}
                setCPValue={setCPValue}
                filteredTypes={filteredTypes}
                setFilteredTypes={setFilteredTypes}
                filterCheck={filterCheck}
                setFilterCheck={setFilterCheck}
                minMaxCPValue={minMaxCPValue}
            />
        </SectionContainer>
    );
}