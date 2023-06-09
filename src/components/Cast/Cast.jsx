import getMovieCredits from 'api/getMovieCredits'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Cast = () => {
    const [movieCredits, setMovieCredits] = useState([])

    const { movieId } = useParams()

    useEffect(() => {
        getMovieCredits(movieId)
        .then(({cast}) => setMovieCredits(cast))
        
    }, [movieId])
console.log('movieCredits', movieCredits)
  return (
    <div>Cast</div>
  )
}

export default Cast