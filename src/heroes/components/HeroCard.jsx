import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const HeroCard = ({
  id,
  superhero, 
  alterEgo,
  firstAppearance,
}) => {

  const heroImgUrl = `/assets/heroes/${ id }.jpg`
  return (
    <>
        <div className='mb-1 animate__animated animate__fadeIn'>
          <div className="card m-1 p-0">
            <div className="row g-0">
              <div className="col-md-4" style={{ overflow: 'hidden' }}>
                <img src={heroImgUrl} className="img-fluid rounded-start" style={{ width: '100%', height: '185px', objectFit: 'cover' }} alt={superhero} />
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                  <h5 className="card-title">{superhero}</h5>
                  <p className="card-title text-muted">{firstAppearance}</p>
                  <p className="card-text">{alterEgo}</p>
                  <Link to={`/hero/${id}`}>...mas</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alterEgo: PropTypes.string.isRequired,
  firstAppearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired
}

