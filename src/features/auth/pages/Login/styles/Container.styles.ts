import styled from 'styled-components';

const Container = styled.div`
  /* border: 5px solid red; */
  width: 100%;
  max-width: 700px;
  background-color: white;
  padding: 2em;
  border-radius: 5px;

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    position: relative;
    text-transform: capitalize;
    width: fit-content;
  }

  .title::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    bottom: -5px;
    left: 0;
  }
`;

export { Container };
