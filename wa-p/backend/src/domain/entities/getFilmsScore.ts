export type GetFilmsScore = {
    title: string
    image: string
    description: string
    director: string
    producer: string
}

export type GetFilmsContScore = {
    cont: number
    page: number
    data: GetFilmsScore[]
}