import { ReactNode } from "react"
import { CartProvider } from "./Cart/Cart";
import { CoffeeProvider } from "./Coffee/Coffee";

interface ContextProps {
    children: ReactNode;

}

export function Context({ children }: ContextProps) {
    return (
        <CoffeeProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </CoffeeProvider>
    )
}