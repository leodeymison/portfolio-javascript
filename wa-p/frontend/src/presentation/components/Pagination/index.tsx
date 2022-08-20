import React, { useState } from 'react'

// Icones
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

// Styleds
import { PaginationLinearStyled, PaginationLinearLi } from './styled'

// components
import PaginationLinearNumber from './number'

import { PaginationLinearType } from '@/presentation/interfaces'

const PaginationLinear:React.FC<PaginationLinearType> = ({ changePage, quant, pageCurrent }) => {
    const [pages, setPages] = useState<Array<any>>(new Array(quant).fill('-'))

    function nextPage(){
        if(pageCurrent > 1){
            changePage(pageCurrent-1)
        }
    }
    function bacKPage(){
        if(pageCurrent < quant){
            changePage(pageCurrent+1)
        }
    }

    return (
        <PaginationLinearStyled>
            <PaginationLinearLi onClick={nextPage}><AiOutlineArrowLeft /></PaginationLinearLi>
            {
                pages?.map((item, index) => (
                    pageCurrent === (index + 1) ? 
                    <PaginationLinearNumber key={index} page={index+1} active={true} /> :
                    <PaginationLinearNumber key={index} page={index+1} changePage={changePage} />
                )) 
                
            }
            <PaginationLinearLi onClick={bacKPage}><AiOutlineArrowRight /></PaginationLinearLi>
        </PaginationLinearStyled>
    )
}

export default PaginationLinear