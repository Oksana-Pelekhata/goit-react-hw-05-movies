import React from 'react'

const SearchForm = ({ handleSearch, searchRequest }) => {
  const handleSubmit = (e) => {
     e.preventDefault()
        const query = e.target.elements.search.value
          if (query === '') {
            return alert("Please, enter your search request ")
          }
    handleSearch(query)
  }

  return (
   <form onSubmit={handleSubmit}>
            <input type="text" name="search"
                defaultValue={searchRequest}
            />
            <button type="submit">Search</button>
        </form>
  )
}

export default SearchForm