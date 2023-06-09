import getMovieDetails from 'api/getMovieDetails'
import Container from 'components/Container/Container'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams, Link, Outlet } from 'react-router-dom'
import { Div } from './MovieDetails.styled'

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({})
    const[error, setError] = useState(null)
    const { movieId } = useParams()
    
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
        getMovieDetails(movieId)
            .then((data) => setMovieInfo({ ...data }))
        .catch(error => setError(error))
    },
        [movieId])
    console.log(movieInfo)
    const { original_title, popularity, overview, genres = [], backdrop_path } = movieInfo
    const genresName = genres.map((genre) => genre.name)

    return (

      <Container>
            <Link to={backLinkLocationRef.current}>Go Back</Link>
            <Div>
          <div>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}  alt={original_title} />
          </div>
          <div>
                <h1>{original_title}</h1>
              <p>{`User Score: ${Math.round(popularity/10)} %`} </p>
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
                      <Link>Review</Link>
                  </li>
              </ul>
            </div>
            <Outlet />
        </Container>
  )
}

export default MovieDetails