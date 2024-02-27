import { getHeroesByPublisher } from "../helpers"
import PropTypes from 'prop-types'
import { HeroCard } from "./HeroCard"
import { useMemo } from "react"

export const HeroList = ({ publisher }) => {
  const hero = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]) 
  return (
    <>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        hero.map( hero => (
          <HeroCard key={ hero.id } { ...hero } />
        ))
      }
      </div>
    </>
  )
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}
