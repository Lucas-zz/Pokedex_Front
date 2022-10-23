export function FILTER_BY_TYPE(pokemons: [], filteredTypes: any, setFilteredPokemons: any) {
    let filteredPokemons: [] = [];
    
    const filterByTypeResults = pokemons.map((pokemon: any) => (
        pokemon.types.filter((type: any) => filteredTypes.includes(type))
    ));

    for (let i = 0; i < filterByTypeResults?.length; i++) {
        if (filterByTypeResults[i].length !== 0) {
            filteredPokemons.push(pokemons[i])
        }
    }
    setFilteredPokemons(filteredPokemons);
}

export function FILTER_BY_MAX_CP() {
    return '';
}
