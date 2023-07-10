import styled from 'styled-components'

interface InputFieldProps {
    width: string
}

const StyledInputField = styled.div<InputFieldProps>`
  width: ${({ width }) => width};
  margin: 1em 0;
  span {
    font-weight: 600;
    letter-spacing: 1px;
    display: block;
    text-transform: capitalize;
    margin-bottom: 0.3em;
  }

  input {
    text-transform: capitalize;
    letter-spacing: 1px;
    width: 100%;
    height: 45px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 1em;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  input:focus {
    border-color: #9b59b6;
  }
`;

export { StyledInputField };