import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroeById } from "../helpers"
import { useMemo } from "react"

export const HeroPages = () => {
  const { id } = useParams()
  const hero = useMemo( () => getHeroeById(id), [ id ])
  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  if (!hero) return <Navigate to="/" />

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src={`../heroes/${ id }.jpg`} 
            alt={ hero.superhero } 
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> { hero.alterEgo}</li>
            <li className="list-group-item"> <b>Publisher:</b> { hero.publisher}</li>
            <li className="list-group-item"> <b>First appearance:</b> { hero.firstAppearance}</li>
          </ul>

          <h5 className="mt-5">Characters</h5>
          <p>{ hero.characters }</p>

          <button
            className="btn btn-outline-primary"
            onClick={ onNavigateBack }
          >
            Return
          </button>
        </div>

      </div>
    </>
  )
}
