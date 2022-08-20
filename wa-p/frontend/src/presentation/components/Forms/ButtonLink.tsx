import React from 'react';

// styleds
import { ButtonStyled } from './styled';

// Interfaces
import { buttomLinkType } from '@/presentation/interfaces';

const ButtonLink:React.FC<buttomLinkType> = ({text, url, blanck}) => {
    return (
        <ButtonStyled>
            <a href={url}  rel="noreferrer" target={blanck ? ('_blank') : '_parent'}>
                {text}
            </a>
        </ButtonStyled>
    )
}

export default ButtonLink