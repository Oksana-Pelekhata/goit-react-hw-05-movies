
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { List } from './Cast.styled'
import { getMovieCredits } from 'api/api'
import notFound from '../../images/not_found.jpeg'

const Cast = () => {
    const [movieCredits, setMovieCredits] = useState(null)
    const [, setError] = useState(null)
    const { movieId } = useParams()
    console.log('movieId', movieId)

    useEffect(() => {
        getMovieCredits(movieId)
            .then(({ cast }) => setMovieCredits(cast))
        .catch(error => setError(error))
        
    }, [movieId])

  return (
      <div>
          <List>
              {
                  movieCredits &&
                  movieCredits.map((el) => {
                      const imageUrl = el.profile_path
            ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
            : notFound;
                      return <li key={el.credit_id}>
                          <img src={imageUrl} width='200px' alt={el.original_name} />
                          <p>{ el.original_name}</p>
                            <p>{el.character}</p>
                      </li>}
                  )
              }
          </List>
    </div>
  )
}

export default Cast