import React from "react";

// Styleds
import { MessageStyled } from "@/presentation/components/Message/styled";

// Interfaces
import { MessageType } from '@/presentation/interfaces'

const Message:React.FC<MessageType> = ({ active, text, type }) => {

    setTimeout(() => {
        active(false);
    }, 4000)
    
    return (
        <MessageStyled type={type}>{text}</MessageStyled>
    )
}

export default Message