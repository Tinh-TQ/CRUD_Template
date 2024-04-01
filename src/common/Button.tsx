import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ variant: string }>`
    padding: 7px 10px;
    outline: none;
    background: ${({ variant }) => (variant === 'outline' ? 'red' : 'none')};
`;

interface Post {
    id: string;
}

interface ButtonProps {
    btnText: string;
    isPublished: boolean;
    post?: Post;
    handleDateTime: () => void;
    variant: string;
}

const Button: React.FC<ButtonProps> = ({ btnText, handleDateTime, variant }) => {
    console.log(variant);
    return (
        <StyledButton onClick={handleDateTime} variant={variant}>
            {btnText}
        </StyledButton>
    );
};

export default Button;
