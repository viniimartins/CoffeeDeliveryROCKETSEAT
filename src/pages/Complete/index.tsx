import { Container, ContainerConfirmed, ContainerCard, ContainerImage } from "./style";

import Map from "../../assets/icon/Map.svg"
import Timer from "../../assets/icon/Timer.svg"
import Coin from "../../assets/icon/Coin.svg"

import Illustration from "../../assets/Illustration.png"
import { useLocation } from "react-router-dom";

export function Complete() {

    const { state } = useLocation()

    return (
        <Container>
            <ContainerConfirmed>
                <div>
                    <h1>
                        Uhu! Pedido confirmado
                    </h1>
                    <p>
                        Agora é só aguardar que logo o café chegará até você
                    </p>
                    <ContainerCard>
                        <div>
                            <img src={Map} alt="" />
                            <div>
                                <p>Entrega em <span>{state.address}</span></p>
                            </div>
                        </div>
                        <div>
                            <img src={Timer} alt="" />
                            <div>
                                <p>Previsão de entrega</p>
                                <span> 20 min - 30 min</span>
                            </div>
                        </div>
                        <div>
                            <img src={Coin} alt="" />
                            <div>
                                <p>Pagamento na entrega</p>
                                <span>{state.pagamet}</span>
                            </div>
                        </div>
                    </ContainerCard>
                </div>

                <ContainerImage>
                    <img src={Illustration} alt="" />
                </ContainerImage>
            </ContainerConfirmed>
        </Container>
    )
}