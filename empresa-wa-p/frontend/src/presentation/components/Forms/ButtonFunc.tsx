import React from 'react';

// styleds
import { ButtonStyled } from './styled';

// Interfaces
import { buttomFuncType } from '@/presentation/interfaces';

const ButtonFunc:React.FC<buttomFuncType> = ({text, padding, margin, hoverBC, hoverC}) => {
    return (
        <ButtonStyled 
            paddding={padding} 
            margin={margin} 
            hoverBC={hoverBC} 
            hoverC={hoverC}
        >
            {text}
        </ButtonStyled>
    )
}

export default ButtonFunc