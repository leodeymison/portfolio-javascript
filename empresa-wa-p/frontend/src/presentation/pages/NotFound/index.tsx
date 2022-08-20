import { NotFoundStyled } from "./styled"
import React from "react"

import Image404 from '@/presentation/assets/images/404.png'
import ButtonRouter from "@/presentation/components/Forms/ButtonRouter"

const NotFound:React.FC = () => {
    return (
        <NotFoundStyled>
            <img src={Image404} alt="404 gif" />
            <p>Page not found</p> <br />
            <ButtonRouter text='Back to home' url="/" />
        </NotFoundStyled>
        
    )
}

export default NotFound