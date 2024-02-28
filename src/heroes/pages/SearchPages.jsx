import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from '../helpers'

export const SearchPages = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = ''} = queryString.parse( location.search )
  const heroes = getHeroesByName( q )

  const { searchText, onInputChange} = useForm({ searchText: q.length > 0 ? q : ''})

  const onSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${ searchText.toLocaleLowerCase().trim() }`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              name="searchText" 
              id="search" 
              className="form-control" 
              placeholder="Find your hero..."
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button 
              type="submit" 
              className="btn mt-2 btn-block btn-outline-primary"
            >Search</button>
          </form>
        </div>

        <div className="col-7">
          <div className="animate__animated animate__fadeIn">

            {
              ( q === '' ) 
                ? <div className="alert alert-info">Search a hero</div>
                : ( heroes.length === 0) && <div className="alert alert-danger">Hero <b>{ q }</b> not encountered</div>
            }

            {
              heroes.map( hero => (
                <HeroCard key={ hero.id } {...hero} />
              ))
            }

          </div>
        </div>

      </div>
    </>
  )
}
