import getMovieByTitle from "api/getMovieByTitle"
import { useState } from "react"

const Movies = () => {
    const [value, setValue] = useState('')
    const [movies, setMovies] = useState([])
    const[error, setError] = useState(null)

    const handleChange = ({ target : {value}}) => {
        setValue(value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        //     getMovieByTitle(value)
        //         .then(({ results }) => {
        //         results.map(result => 
        //             setMovies((movies) => [...movies, {
        //                 title: result.title || result.name,
        //                 id: result.id
        //             }])
        //         )
        //     })
        // .catch(error => setError(error))
    
        setValue('')
    }
    return (
        <form onSubmit={handleSearch}>
            <input type="text"
                onChange={handleChange}
                value={value}
            />
            <button type="submit">Search</button>
    </form>
)
}

export default Movies