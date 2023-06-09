import getTrendingMovies from "api/getTrendingMovies"
import Container  from "components/Container/Container.jsx"
import MoviesList from "components/Movieslist/MoviesList"
import { useEffect, useState } from "react"

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null)

    useEffect(() => {
        getTrendingMovies()
            .then(({ results }) =>
                results.map(result =>
                    setTrendingMovies(prev =>
                    [...prev, { title: result.title || result.name, id: result.id }])
                     )
         ).catch(error => setError(error))
    }, [])
    return (
        <Container>
            <h1>Trending today</h1>
            <MoviesList movies={trendingMovies} />
        </Container>
    )
}

export default Home