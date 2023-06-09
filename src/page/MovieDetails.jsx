import getMovieDetails from 'api/getMovieDetails'
import Container from 'components/Container/Container'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'

const MovieDetails = () => {
    const [movies, setMovies] = useState({})
    const[error, setError] = useState(null)
    const { movieId } = useParams()
    
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');

    

    useEffect(() => {
        getMovieDetails(movieId)
            .then((data) => setMovies())
        .catch(error => setError(error))
    },
        [movieId])
    
  return (
      <Container>
          <link to={backLinkLocationRef.current}>Go Back</link>
        </Container>
  )
}

export default MovieDetails