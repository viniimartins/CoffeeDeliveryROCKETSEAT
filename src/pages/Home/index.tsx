// import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { CardCart } from "../../components/Card/Cart";
import { CardCatalog } from "../../components/Card/Catalog";
import { Container } from "./style";


export function Home() {
    return (
        <>
            <Container>
                <CardCatalog />
                <CardCart />
            </Container>
        </>
    )
}