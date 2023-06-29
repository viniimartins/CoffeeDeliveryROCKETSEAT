import { ButtonCity, ContainerButtons, ContainerHeader, Image, StylediconMap } from "./style"

import Logo from "../../assets/Logo.svg"
import { Badge } from "../Badge"

export function Header() {
    return (
        <ContainerHeader>
            <Image src={Logo} alt="" />

            <ContainerButtons>
                <ButtonCity>
                    <StylediconMap />
                    Porto Alegre , RS
                </ButtonCity>
                <Badge number={0} />
            </ContainerButtons>
        </ContainerHeader>
    )
}