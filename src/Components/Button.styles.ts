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

${props => {
        return css`background-color: ${buttonVariant[props.variant]}`
    }}
`