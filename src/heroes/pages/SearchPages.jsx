import { HeroCard } from "../components/HeroCard"

export const SearchPages = () => {
  return (
    <>
      <h1 className="mt-4">Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form>
            <input 
              type="text" 
              name="searchText" 
              id="search" 
              className="form-control" 
              placeholder="Find your hero..."
              autoComplete="off"
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
              Hero <b>abc</b> not encountered
            </div>

            {/* <HeroCard /> */}
          </div>
        </div>

      </div>
    </>
  )
}
