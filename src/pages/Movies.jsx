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


    const handleSearch = (e) => {
        e.preventDefault()
        const query = e.target.elements.search.value
          if (query === '') {
            return alert("Please, enter your search request ")
        }
        setSearchParams({ search: query })
        setMovies([])
    }

    useEffect(() => {
        getMovieByTitle(searchRequest)
                .then(({ results }) => {
                results.map(result => 
                    setMovies((movies) => [...movies, {
                        title: result.title || result.name,
                        id: result.id
                   }])
                )
            })
        .catch(error => setError(error))
    }, [searchRequest])


    return ( <Container>
        <SearchForm handleSearch={handleSearch} searchRequest={searchRequest} />
        <MoviesList movies={movies} />
        </Container>
)
}

export default Movies