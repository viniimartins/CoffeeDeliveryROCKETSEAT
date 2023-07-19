import { ReactNode } from "react";
import { Coffee } from "../Coffee/types";

export interface CartContextData {
  addToCart: (value: Coffee) => void;
  removeToCart: (value: Coffee) => void;

  cart: Coffee[] | null;
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

export interface CartProviderProps {
  children: ReactNode;
}
