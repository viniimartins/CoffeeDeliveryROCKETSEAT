import { createContext, useContext, useState } from "react";
import { CoffeeContextData, CoffeeProviderProps, Coffee } from "./types";
import { Catalogo } from "../../pages/Home/Mock";


export const CoffeeContext = createContext({} as CoffeeContextData)

export function CoffeeProvider({ children }: CoffeeProviderProps) {

    const [coffee, setCoffee] = useState<Coffee[]>(Catalogo)

    function increment(id: number) {
        setCoffee(state => state.map(coffee => {
            return id === coffee.id ? { ...coffee, quantity: coffee.quantity + 1 } : coffee
        }))
    }

    function decrement(id: number) {
        setCoffee(state => state.map(coffee => {
            return id === coffee.id ? { ...coffee, quantity: coffee.quantity > 0 ? coffee.quantity - 1 : coffee.quantity } : coffee
        }))
    }

    return (
        <CoffeeContext.Provider value={{ coffee, increment, decrement }}>
            {children}
        </CoffeeContext.Provider>
    )
}

export function useCoffee() {
    const coffee = useContext(CoffeeContext)
    return coffee
}