import styled from 'styled-components';

const StyledButton = styled.div`
  height: 45px;
  margin-top: 45px;
  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;
    background: linear-gradient(135deg, #9b59b6, #71b7e6);
    border: none;
    border-radius: 5px;
    color: white;
    letter-spacing: 1px;
    transition: all 5s ease;
  }

  button:hover {
      background: linear-gradient(135deg, #71b7e6, #9b59b6);
  }
`;

export { StyledButton };
