import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { AxiosHttpClient } from '@/infra/http-axios-client'
import ENV from '@/main/env'

// styleds
import { BoxFilmStyled } from "./styled"
import { ContainerStyled } from "@/presentation/assets/style/styled"

// components 
import ButtonRouter from "@/presentation/components/Forms/ButtonRouter"


const Film:React.FC = () => {
    const params = useParams<any>()
    const [film, setFilm] = useState<any>()
    useEffect(() => {
        new AxiosHttpClient().request({
            url: `${ENV.API_URL}/films/${params.id}`,
            method: 'get'
        }).then(res => {
            setFilm(res.body)
        })
    }, [params.id])
    return (
        <>
            <ContainerStyled dplay="flex" justifyC="flex-end">
                <ButtonRouter text={'Back'} url='/' />
            </ContainerStyled>
            <br />
            {
                film && (
                    <BoxFilmStyled>
                        <div>
                            <img src={film.image} alt={film.title} />
                        </div>
                        <div>
                            <h1>{film.title}</h1>
                            <p><strong>Director: </strong>{film.director}</p>
                            <p><strong>Producer: </strong>{film.producer}</p>
                            <p><strong>Description: </strong>{film.description}</p>
                        </div>
                    </BoxFilmStyled>
                )
            }
        </>
        
    )
}

export default Film