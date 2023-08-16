import { createContext, useContext, useState } from "react"
import { CartContextData, CartProviderProps } from "./types"
import { Coffee } from "../Coffee/types"



export const CartContext = createContext({} as CartContextData)


export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Coffee[] | null>(null)


    console.log(cart)

    function addToCart(coffee: Coffee) {
        setCart(state => {
            if (state) {
                const existingCoffee = state.find(item => item.id === coffee.id);
                if (existingCoffee) {
                    const updatedCart = state.map(item =>
                        item.id === coffee.id ? { ...item, quantity: coffee.quantity } : item
                    );
                    return updatedCart;
                } else {
                    return [...state, coffee];
                }
            } else {
                return [coffee];
            }
        });
    }


    function increment(id: number) {
        setCart(state => state ? state.map(coffee => {
            return id === coffee.id ? { ...coffee, quantity: coffee.quantity + 1 } : coffee
        }) : null)
    }

    function decrement(id: number) {
        setCart(state => state ? state.map(coffee => {
            return id === coffee.id ? { ...coffee, quantity: coffee.quantity > 0 ? coffee.quantity - 1 : coffee.quantity } : coffee
        }) : null)
    }


    function removeToCart(coffee: Coffee) {
        setCart((state) => {
            if (state) {
                const updatedCart = state.filter((item) => item.id !== coffee.id);
                return updatedCart;
            }
            return state;
        });
    }

    return (
        <CartContext.Provider value={{ addToCart, removeToCart, cart, increment, decrement }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const cart = useContext(CartContext)
    return cart
}