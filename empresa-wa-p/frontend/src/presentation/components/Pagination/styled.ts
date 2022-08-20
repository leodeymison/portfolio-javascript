import styled from "styled-components";

export const PaginationLinearStyled = styled('ul')`
    display: flex;
    justify-content: center;
`
type PaginationLinearLiType = {
    active?: boolean,
}
export const PaginationLinearLi = styled('li')<PaginationLinearLiType>`
    padding: 10px 15px;
    margin: 0 5px;
    cursor: pointer;
    background-color: ${
        props => props.active ? props.theme.colors.terc : '#0000'
    };
    
    &:hover {
        background-color: ${prosp => prosp.theme.colors.terc};
    }
`