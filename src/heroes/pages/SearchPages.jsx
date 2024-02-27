import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"

export const SearchPages = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = ''} = queryString.parse( location.search )
  console.log({ q })

  const { searchText, onInputChange} = useForm({
    searchText: ''
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${ searchText.lowerCase().trim() }`)
  }

  return (
    <>
      <h1 className="mt-4">Search</h1>
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
            <div className="alert alert-info">
              Search a hero
            </div>
            <div className="alert alert-danger">
              Hero <b>{ q }</b> not encountered
            </div>

            {/* <HeroCard /> */}
          </div>
        </div>

      </div>
    </>
  )
}
