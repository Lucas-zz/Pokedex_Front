import { gql } from "@apollo/client";

export const GET_POKEMONS_QUERY = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            types
            maxCP
            number
        }   
    }
`;