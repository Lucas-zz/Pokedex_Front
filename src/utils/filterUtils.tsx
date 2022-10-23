export function FILTER_BY_TYPE(pokemons: [], filteredTypes: any): [] {
    let filteredPokemonsByType: [] = [];
    
    const filterByTypeResults = pokemons.map((pokemon: any) => (
        pokemon.types.filter((type: any) => filteredTypes.includes(type))
    ));

    for (let i = 0; i < filterByTypeResults?.length; i++) {
        if (filterByTypeResults[i].length !== 0) {
            filteredPokemonsByType.push(pokemons[i])
        }
    }
    return filteredPokemonsByType;
}

export function FILTER_BY_MAX_CP(pokemons: any, CPValue: any) {
    let filteredPokemonsByMaxCP = [];

    for (let i = 0; i < pokemons?.length; i++) {
        if (pokemons[i].maxCP >= CPValue[0] && pokemons[i].maxCP <= CPValue[1]) {
            filteredPokemonsByMaxCP.push(pokemons[i])
        }
    }

    return filteredPokemonsByMaxCP;
}

export function GET_MIN_AND_MAX_CP(pokemons: any, setMinMaxCPValue: any) {
    let minValue = pokemons[0].maxCP;
    let maxValue = pokemons[0].maxCP;
    
    for (let i = 0; i < pokemons.length; i++) {
        let value = pokemons[i].maxCP;

        minValue = (value < minValue) ? value : minValue;
        maxValue = (value > maxValue) ? value : maxValue;
    }

    setMinMaxCPValue([minValue, maxValue]);
}