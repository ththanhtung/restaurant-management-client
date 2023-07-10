import React from 'react'
import { StyledHeader } from './styles'

const Header:React.FC = () => {
  return (
    <StyledHeader>
      header
      <nav>
        <ul>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">home</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export {Header}