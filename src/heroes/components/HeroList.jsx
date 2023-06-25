import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] ); //si el id es diferente dispara la funcion, caso contrario no vuelve a llamarse


  return (
    <>
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map( heroe => (
                    <HeroCard 
                        key={heroe.id}
                        { ...heroe } //exparse o pasa todas las propiedades 
                    />
                ))
            }
        </div>
    </>
  )
}
