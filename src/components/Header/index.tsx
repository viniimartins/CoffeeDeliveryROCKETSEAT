import { ButtonCity, ContainerButtons, ContainerHeader, Image, StylediconMap } from "./style"

import Logo from "../../assets/Logo.svg"
import { Badge } from "../Badge"
import { NavLink } from "react-router-dom"
import { useCart } from "../../context/Cart/Cart"

export function Header() {


    const { cart } = useCart()

    const total = cart?.reduce((accum, current) => {
        return accum + current.quantity
    }, 0)


    return (
        <ContainerHeader>
            <NavLink to="/">
                <Image
                    src={Logo}
                    alt="" />
            </NavLink>

            <ContainerButtons>
                <ButtonCity>
                    <StylediconMap />
                    Porto Alegre , RS
                </ButtonCity>
                <NavLink to="/Order">
                    <Badge
                        number={total || 0}
                    />
                </NavLink>

            </ContainerButtons>
        </ContainerHeader>
    )
}