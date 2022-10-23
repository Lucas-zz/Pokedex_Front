import { useEffect, useState } from "react";
import { Pokemon } from "../../pages/ListPage";
import { Container, InfoContainer, PokeCP, PokeImage, PokeInfo, PokeName, PokeNumber, PokeTypes } from "./style";

// type maxCP = Pick<Pokemon, 'maxCP'>;

export default function PokeContainer(props: Pokemon) {

    let [color, setColor] = useState('');

    useEffect(() => {
        if (props.maxCP > 0 && props.maxCP < 500) setColor('#F87060');
        if (props.maxCP > 501 && props.maxCP < 1000) setColor('#662C91');
        if (props.maxCP > 1001 && props.maxCP < 1500) setColor('#F5B700');
        if (props.maxCP > 1501) setColor('#00C1FD');
    }, [props.maxCP]);

    return (
        <Container>
            <InfoContainer>
                <PokeImage src={props.image}/>
                <PokeInfo>
                    <PokeName>{props.name}</PokeName>
                    <PokeTypes>{props.types.join(', ')}</PokeTypes>
                    <PokeCP color={color}>{props.maxCP}</PokeCP>
                </PokeInfo>
                <PokeNumber>{props.number}</PokeNumber>
            </InfoContainer>
        </Container>
    );
}
