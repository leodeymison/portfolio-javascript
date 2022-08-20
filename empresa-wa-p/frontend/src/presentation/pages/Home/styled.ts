import styled from "styled-components";

export const BoxFilmListStyled = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    li {
        width: 19%;
        display: flex;
        justify-content: center;
        margin: 10px .5%;
        img {
            width: 100%;
        }
    }
    @media (max-width: 1000px){
        li {
            width: 24%;
        }
    }
    @media (max-width: 800px){
        li {
            width: 32.333%;
        }
    }
    @media (max-width: 600px){
        li {
            width: 48%;
            margin: 10px 1%;
        }
    }
`