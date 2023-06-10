
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { List } from './Cast.styled'
import { getMovieCredits } from 'api/api'

const Cast = () => {
    const [movieCredits, setMovieCredits] = useState([])
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
                  movieCredits.map((el) => 
                      <li key={el.credit_id}>
                          <img src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`} width='200px' alt={el.original_name} />
                          <p>{ el.original_name}</p>
                            <p>{el.character}</p>
                      </li>
                  )
              }
          </List>
    </div>
  )
}

export default Cast