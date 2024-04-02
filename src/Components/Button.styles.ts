import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariant = {
    primary: 'purple',
    secundary: 'green',
    danger: 'red',
    success: 'gold'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 40px;

background-color: ${props => props.theme["green-500"]};
color: ${props => props.theme.white};

/* ${props => {
        return css
            `background-color: ${buttonVariant[props.variant]}`
    }} */
`