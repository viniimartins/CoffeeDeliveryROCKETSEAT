import { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledButton } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width?: number
    children: ReactNode
    disabled?: boolean
}

export function ButtonPrimary({ children, disabled }: ButtonProps) {
    return (
        <StyledButton type='submit' disabled={disabled}>
            {children}
        </StyledButton>
    )
}