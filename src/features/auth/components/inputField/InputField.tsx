import React from 'react';
import { StyledInputField } from './styles';

interface Props {
  type: string;
  label: string;
  placeholer?: string;
  name: string;
  value: string | number;
  width: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  type = 'text',
  label,
  placeholer,
  name,
  value,
  width,
  onChange,
}) => {
  return (
    <StyledInputField width={width}>
      <span>{label}</span>
      <input
        type={type}
        placeholder={placeholer}
        name={name}
        value={value}
        onChange={onChange}
      />
    </StyledInputField>
  );
};

export { InputField };
