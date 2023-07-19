import { ReactNode } from "react";

export interface CoffeeContextData {
  coffee: Coffee[];
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

export interface CoffeeProviderProps {
  children: ReactNode;
}

export interface Coffee {
  id: number;
  image: string;
  badge: string;
  type: string;
  text: string;
  price: number;
  quantity: number;
}
