import styled from "styled-components";

type InputStyledType = {
    hoverOption: boolean,
    active?: boolean
}

export const InputStyled = styled('input')<InputStyledType>`
    padding: .5em;
    margin-bottom: 10px;
    border: solid 1px ${props => props.theme.colors.terc};
    border-radius: 5px;
    transition: 0.3s;
    background-color: ${props => props.active ? props.theme.colors.terc : "#0000"};
    padding: .7em;
    font-size: 16px;
    ${
        props => props.hoverOption === true && (
            `&:hover{
                background-color: ${props.theme.colors.terc};
            }`
        )
    }
    &[type = 'submit']{
        cursor: pointer;
    }
`

type SelectType = {
    removeNumberOne?: boolean
}

export const SelectStyled = styled('select')<SelectType>`
    padding: .5em;
    margin-bottom: 10px;
    border: solid 1px ${props => props.theme.colors.terc};
    border-radius: 5px;
    transition: 0.3s;
    background-color: "#0000";
    padding: .7em;
    font-size: 16px;
    option {
        ${
            props => props.removeNumberOne && `
                &:nth-child(1){
                    display: none;
                }
            `
        }
    }
`

type ButtonType = {
    paddding?: string,
    active?: boolean,
    margin?: string,
    hoverBC?: string,
    hoverC?: string
}

export const ButtonStyled = styled('button')<ButtonType>`
    margin-bottom: 10px;
    border: solid 1px ${props => props.theme.colors.terc};
    border-radius: 5px;
    transition: 0.3s;
    background-color: ${props => props.active ? props.theme.colors.terc : '#0000'};
    margin: ${props => props.margin ? props.margin : '0 5px'};
    cursor: pointer;
    align-items: center;
    display: flex;
    transition: 0.2s;
    padding: ${props => props.paddding || '0px'};
    a {
        padding: .7em;
    }
    &[type = 'submit']{
        cursor: pointer;
    }
    &:hover {
        background-color:  ${props => props.hoverBC || props.theme.colors.terc};
        color: ${props => props.hoverC || props.theme.colors.text};
        transition: 0.2s;
    }
    &:hover > p{
        color: ${props => props.hoverC || props.theme.colors.text};
        transition: 0.2s;
    }
    svg {
        font-size: 20px;
        margin-right: 10px;
    }
`

export const TextareaStyled = styled('textarea')`
    padding: .5em;
    margin-bottom: 10px;
    border: solid 1px ${props => props.theme.colors.terc};
    border-radius: 5px;
    transition: 0.3s;
    background-color: #0000;
    padding: .7em;
    height: 120px;
    font-size: 16px;
`