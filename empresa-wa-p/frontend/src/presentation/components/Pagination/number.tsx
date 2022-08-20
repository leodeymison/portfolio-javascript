import React from 'react'

// Styleds
import { PaginationLinearLi } from './styled'

// interfaces
import { PaginationLinearNumberType } from '@/presentation/interfaces'

const PaginationLinearNumber:React.FC<PaginationLinearNumberType> = ({ page, active, changePage }) => {
    function clickBtn(){
        changePage(page)
    }
    return (
        <PaginationLinearLi onClick={clickBtn} active={active}>{page}</PaginationLinearLi>
    )
}

export default PaginationLinearNumber