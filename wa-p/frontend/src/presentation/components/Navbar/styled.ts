import styled from "styled-components";

export const NavbarStyled = styled('header')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em 2em;
    background-color: ${props => props.theme.colors.primary};
    ul {
        display: flex;
        li {
            margin: 0 5px;
            cursor: pointer;
            a {
                padding: .3em 1em;
                &:hover {
                    background-color: ${props => props.theme.colors.terc};
                }
            }
        }
    }
    a {
        display: flex;
        align-items: center;
        h1 {
            margin-right: 10px;
            color: ${props => props.theme.colors.text}
        }
        img {
            height: 80px;
        }
    }
`