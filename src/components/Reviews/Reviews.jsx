
import { getMovieReview } from 'api/api'
import Container from 'components/Container/Container'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Reviews = () => {
const [movieReview, setMovieReview] = useState([])
    const [, setError] = useState(null)
    const { movieId } = useParams()

    useEffect(() => {
        getMovieReview(movieId)
            .then(({ results }) => setMovieReview(results))
        .catch(error => setError(error))
        
    }, [movieId])
  
  return (
    <Container>
      {movieReview.length === 0 ? (
        <p>We don't have any reviews for this movie</p>)
        : (
          <ul>
            {movieReview.map(el => 
              <li key={el.id}>
                <h3>{`Author: ${el.author}`}</h3>
                <p>{ el.content}</p>
              </li>)}
          </ul>
      ) }
    </Container>
  )
}

export default Reviews

//We don't have any reviews for this movie