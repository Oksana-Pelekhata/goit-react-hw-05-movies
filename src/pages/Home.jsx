
import { getTrendingMovies } from "api/api"
import Container  from "components/Container/Container.jsx"
import MoviesList from "components/Movieslist/MoviesList"
import { useEffect, useState } from "react"

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [, setError] = useState(null)

        useEffect(() => {
        getTrendingMovies()
            .then(({ results }) =>
               {const modifiedResults = results.map(result => ({title: result.title || result.name, id: result.id }))
                 setTrendingMovies(modifiedResults)
                     }
         ).catch(error => setError(error))
    }, [])
    return (
        <Container>
            <h1>Trending today</h1>
            { trendingMovies.length > 0 && <MoviesList movies={trendingMovies} />}
        </Container>
    )
}

export default Home