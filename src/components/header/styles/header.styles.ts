import styled from 'styled-components'

const StyledHeader = styled.header`
    ul {
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        font-size: 1.5rem;
        font-weight: 700;
        padding: 2em;
        background-color: blue;
        width: 100%;
        li {
            margin-left: 1em;
            padding:0;
            a {
                color: white;
                text-decoration: none;
            }
        }
    }
    @media(max-width: 35em){
        ul {
            inset: 0 0 0 30%;
            flex-direction: column;
            align-items: start;
            padding: min(20vh, 10rem) 2em
        }
    }
`

export { StyledHeader };