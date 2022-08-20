import React from 'react';
import { Link } from 'react-router-dom';

// styleds
import { ButtonStyled } from './styled';

// Interfaces
import { buttomRouterType } from '@/presentation/interfaces';

const ButtonRouter:React.FC<buttomRouterType> = ({text, padding, url, active}) => {
    return (
        <ButtonStyled paddding={padding} active={active}>
            <Link to={url}>
                {text}
            </Link>
        </ButtonStyled>
    )
}

export default ButtonRouter