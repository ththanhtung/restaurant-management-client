import styled from 'styled-components'

const StyledInputField = styled.div`
    width: calc(100%/2 - 20px);
    margin: 1em 0;
    span {
        display: block;
        text-transform: capitalize;
        margin-bottom: .3em;
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
        transition: all .3s ease;
    }

    input:focus {
        border-color: #9b59b6;
    }
`

export { StyledInputField };