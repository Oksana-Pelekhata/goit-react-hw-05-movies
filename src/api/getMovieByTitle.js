const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDZmMmViODRlZmMxMzljMTk5OGU5YmRmYzZlMTU2ZiIsInN1YiI6IjY0MzhlODZmYWI2ODQ5MDBiZDAxM2E2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MX0hLc_etjm7AgFSwCGHbxJEsYMEfLi6jQCO-l5vNZc'
    }
}

const getMovieByTitle = (title) => {

  return fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&query=${title}
`, options)
  .then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }

      return response.json();
  })

}

export default getMovieByTitle