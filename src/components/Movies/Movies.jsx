import getMovieByTitle from "api/getMovieByTitle"
import { useEffect, useState } from "react"
// import { Link } from 'react-router-dom';
import MoviesList from '../Movieslist/MoviesList'
import Container from "components/Container/Container"
import { useSearchParams } from "react-router-dom"

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? '';


    const getMovies = (query) => {
        if (query === '') {return}
        getMovieByTitle(query)
                .then(({ results }) => {
                results.map(result => 
                    setMovies((movies) => [...movies, {
                        title: result.title || result.name,
                        id: result.id
                   }])
                )
            })
        .catch(error => setError(error))
    }

    const handleChange = ({ target: {value}}) => {
        setSearchParams({query: value})
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setMovies([])
        getMovies(query)
        setSearchParams({query: ''})
    }

    useEffect(() => {
        getMovies(query)
    }, [])


    return ( <Container>
        <form onSubmit={handleSearch}>
            <input type="text" name="search"
                onChange={handleChange}
                value={query}
            />
            <button type="submit">Search</button>
        </form>
        <MoviesList movies={movies} />
        </Container>
)
}

export default Movies