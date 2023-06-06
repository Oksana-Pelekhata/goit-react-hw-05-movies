import getTrendingMovies from "api/getTrendingMovies"
import { useEffect, useState } from "react"
const { Link } = require("react-router-dom")

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        getTrendingMovies()
            .then(({ results }) =>
                results.map(result =>
                    setTrendingMovies(prev =>
                    [...prev, { title: result.title || result.name, id: result.id }])
                     )
         )
    }, [])
    return (
        <>
            <h1>Trending today</h1>
                <ul>
                    {trendingMovies.map(({ title, id }) =>
                        <li key={id} >
                            <Link to={`/movies/${id}`}>{title} </Link>
                        </li>
                    )}
                </ul>
        </>
    )
}

export default Home