import { FC } from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({
    type: 'button'
})`
    cursor:pointer;
    padding: 1.1em 2.2em;
    border:none;
    box-shadow: 0 2px 8px rgba(0,0,0,.3);
    background-color: #234f94;
    border-radius: 5px;
    color: white;
    transition:.2s;

    &:hover{
        background-color: #1d4079;
    }
`

interface StandardButtonProps {
    className?: string,
    onClick?: () => void
}

export const StandardButton: FC<StandardButtonProps> = ({ children, className, onClick }) => {
    return <Button onClick={onClick} className={className}>{children}</Button>;
};