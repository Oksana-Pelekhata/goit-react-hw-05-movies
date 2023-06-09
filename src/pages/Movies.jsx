import { useEffect, useState } from "react"
import MoviesList from '../components/Movieslist/MoviesList'
import Container from "components/Container/Container"
import { useSearchParams } from "react-router-dom"
import { getMovieByTitle } from "api/api"
import SearchForm from "components/SearchForm/SearchForm"

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchRequest = searchParams.get('search') ?? '';


    const handleSearch = (query) => {
       
        setSearchParams({ search: query })
        setMovies([])
    }

     useEffect(() => {
        getMovieByTitle(searchRequest)
        .then(({ results }) => {
            return results.map(result => 
                ({title: result.title || result.name,
                    id: result.id
                   })
                )
                })
            .then(results => setMovies(results))
        .catch(error => setError(error))
    }, [searchRequest])

    return ( <Container>
        <SearchForm handleSearch={handleSearch} searchRequest={searchRequest} />
        {movies.length > 0 && <MoviesList movies={movies} />}
        </Container>
)
}

export default Movies