export type PaginationLinearType = {
    quant: number,
    changePage: Function,
    pageCurrent: number
}

export type PaginationLinearNumberType = {
    page: number,
    active?: boolean,
    changePage?: Function
}