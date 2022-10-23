import { Container } from "./style";
import Loading from "../../assets/puff_loading.svg";

export default function Load() {
    return (
        <Container>
            <img src={Loading} alt="puff loading svg" />
        </Container>
    );
}