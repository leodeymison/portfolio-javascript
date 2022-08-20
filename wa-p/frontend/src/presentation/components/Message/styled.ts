import styled from "styled-components";

type MessageType = {
    type: "error" | "ok" | "warnning",
}

export const MessageStyled = styled("div")<MessageType>`
    position: fixed;
    right: 25px;
    top: 20px;
    padding: 1em;
    width: 220px;
    border-radius: 5px;
    font-weight: 600;
    ${props => props.type === 'warnning' && `background-color: #dada04; color: #3f3f3f;`}
    ${props => props.type === 'ok' && `background-color: #02df02; color: #3f3f3f;`}
`