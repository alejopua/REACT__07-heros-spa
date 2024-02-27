import { getHeroesByPublisher } from "../helpers"
import PropTypes from 'prop-types'
import { HeroCard } from "./HeroCard"
import { useMemo } from "react"

export const HeroList = ({ publisher }) => {
  const hero = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]) 
  return (
    <>
      <div className="row row-cols-md-2 row-cols-lg-3 g-3">
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
