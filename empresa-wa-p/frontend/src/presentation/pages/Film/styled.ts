import styled from "styled-components";

export const BoxFilmStyled = styled('ul')`
    display: flex;
    div {
        padding-left: 1em;
        img {
            height: 350px;
        }
        h1 {
            padding-bottom: .5em;
        }
        p {
            padding-bottom: .3em;
        }
    }
    @media (max-width: 700px){
        flex-direction: column;
        text-align: center;
    }
`