import { Container, ContainerBanner, ContainerCatalog, ContainerCoffee, ContainerImage, ContainerItens, ContainerText, Image, Item, ItenColumm } from "./style";
import CoffeImage from "../../assets/CoffeeImage.png"
import Cart from "../../assets/IconBanner/Cart.svg";
import Timer from "../../assets/IconBanner/Timer.svg";

import Box from "../../assets/IconBanner/Box.svg";
import Coffee from "../../assets/IconBanner/Coffee.svg";
import { CardCatalog } from "../../components/Card/Catalog";
import { useCoffee } from "../../context/Coffee/Coffee";



export function Home() {

    const { coffee } = useCoffee()

    return (
        <>
            <Container>
                <ContainerBanner>
                    <ContainerText>
                        <h1>
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <p>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </p>
                        <ContainerItens>
                            <ItenColumm>
                                <Item>
                                    <img src={Cart} />
                                    <p>Compra simples e segura</p>
                                </Item>
                                <Item>
                                    <img src={Timer} />

                                    <p>Entrega rápida e rastreada</p>
                                </Item>
                            </ItenColumm>
                            <ItenColumm>
                                <Item>
                                    <img src={Box} />
                                    <p>Embalagem mantém o café intacto</p>
                                </Item>
                                <Item>
                                    <img src={Coffee} />

                                    <p>O café chega fresquinho até você</p>
                                </Item>
                            </ItenColumm>
                        </ContainerItens>
                    </ContainerText>
                    <ContainerImage>
                        <Image src={CoffeImage} />
                    </ContainerImage>
                </ContainerBanner>
                <ContainerCoffee>
                    <h2>
                        Nossos cafés
                    </h2>
                    <ContainerCatalog>
                        {coffee.map(catalog => {
                            return (
                                <CardCatalog
                                    coffee={catalog}
                                    key={catalog.id}
                                />
                            )
                        })}
                    </ContainerCatalog>
                </ContainerCoffee>
            </Container>
        </>
    )
}