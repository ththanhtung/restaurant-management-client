import React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
    label: string
}

const Button: React.FC<ButtonProps> = ({label}) => {
  return (
    <StyledButton>
      <button>{label}</button>
    </StyledButton>
  );
};

export { Button };
