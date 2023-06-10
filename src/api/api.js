const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDZmMmViODRlZmMxMzljMTk5OGU5YmRmYzZlMTU2ZiIsInN1YiI6IjY0MzhlODZmYWI2ODQ5MDBiZDAxM2E2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MX0hLc_etjm7AgFSwCGHbxJEsYMEfLi6jQCO-l5vNZc'
    }
}

const url = 'https://api.themoviedb.org/3'

export const getTrendingMovies = () => {
  return fetch(`${url}/trending/all/day?language=en-US`, options)
  .then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  })

}

export const getMovieByTitle = (title) => {
  return fetch(`${url}/search/movie?query=${title}`, options)
  .then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  })
}

export const getMovieDetails = (id) => {
  return fetch(`${url}/movie/${id}`, options)
  .then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  })
}

export const getMovieCredits = (id) => {
  return fetch(`${url}/movie/${id}/credits`, options)
  .then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  })
}

export const getMovieReview = (id) => {
  return fetch(`${url}/movie/${id}/reviews`, options)
  .then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  })
}