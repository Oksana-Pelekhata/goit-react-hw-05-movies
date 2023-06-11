
import Container from 'components/Container/Container'
import React, { useEffect, useRef, useState, Suspense } from 'react'
import { useLocation, useParams, Link, Outlet } from 'react-router-dom'
import { Div } from './MovieDetails.styled'
import { getMovieDetails } from 'api/api'
import notFound from '../../images/not_found.jpeg'

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState(null)
    const[, setError] = useState(null)
    const { movieId } = useParams()
    
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        getMovieDetails(movieId)
            .then((data) => setMovieInfo({ ...data }))
        .catch(error => setError(error))
    },
      [movieId])
  if (!movieInfo) { return }
    const { original_title, vote_average, overview, genres = [], poster_path } = movieInfo
  const genresName = genres.map((genre) => genre.name)
  const imageUrl = poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : notFound;

    return (

      <Container>
            <Link to={backLinkLocationRef.current}>Go Back</Link>
            <Div>
          <div>
                <img src={imageUrl} width='250px' alt={original_title} />
          </div>
          <div>
                <h1>{original_title}</h1>
              <p>{`User Score: ${Math.round(vote_average*10)} %`} </p>
              <h2>Overview</h2>
                <p>{overview}</p>
              <h2>Genres</h2>
                <p>{genresName.join(' ')}</p>
                </div>
            </Div>
          <div>
              <h2>Additional information</h2>
              <ul>
                  <li>
                      <Link to='cast'>Cast</Link>
                  </li>
                    <li>
                      <Link to='reviews'>Reviews</Link>
                  </li>
              </ul>
        </div>
        <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
          <Outlet />
        </Suspense>
           
        </Container>
  )
}

export default MovieDetails