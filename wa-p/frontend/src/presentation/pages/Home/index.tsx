import React, { useEffect, useState } from 'react'
import { AxiosHttpClient } from '@/infra/http-axios-client'
import ENV from '@/main/env'

import { Link } from 'react-router-dom'

// styleds
import { BoxFilmListStyled } from './styled'
import { ContainerStyled, Pstyled } from '@/presentation/assets/style/styled'
import { ButtonStyled } from '@/presentation/components/Forms/styled'

// Components
import PaginationLinear from '@/presentation/components/Pagination'

// types 
import { GetFilmsContScore } from '@/domain/entities'

const Home:React.FC = () => {
    const [films, setFilms] = useState<GetFilmsContScore>()

    useEffect(() => {
        StartFilms(1)
    }, [])

    function LoadFilms(){
        new AxiosHttpClient().request({
            url: `${ENV.API_URL}/create`,
            method: 'get'
        }).then(() => {
            StartFilms(1)
        })
    }
    function StartFilms(page: number){
        new AxiosHttpClient().request({
            url: `${ENV.API_URL}/films?page=${page}`,
            method: 'get'
        }).then(res => {
            setFilms(res.body)
        })
    }
    return (
        <>
            {
                !films?.data && (
                    <ContainerStyled dplay='flex' justifyC='flex-end'>
                        <ButtonStyled onClick={LoadFilms} paddding='.8em 1.5em'>To charge</ButtonStyled>
                    </ContainerStyled>
                )
            }
            <br />
            <BoxFilmListStyled>
                {
                    films?.data ? (
                        films.data?.map((film, index) => (
                            <li key={index}>
                                <Link to={`/${film._id}`}>
                                    <img src={film.image} alt={film.title} />
                                </Link>
                            </li>
                        ))
                    ) : (
                        <Pstyled>Load the movies to launch the platform</Pstyled>
                    )
                }
            </BoxFilmListStyled>
            <br />
            {
                films?.data && (
                    <PaginationLinear 
                        pageCurrent={films.page} 
                        changePage={StartFilms} 
                        quant={films.cont} />
                )
            }
            <br /><br />
        </>
        
    )
}

export default Home