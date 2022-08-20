import styled from "styled-components";

export const NotFoundStyled = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 40%;
    }
    @media (max-width: 500px){
        img {
            width: 80%;
        }
    }
`