import React from 'react'

const SearchForm = ({handleSearch, searchRequest}) => {
  return (
   <form onSubmit={handleSearch}>
            <input type="text" name="search"
                defaultValue={searchRequest}
            />
            <button type="submit">Search</button>
        </form>
  )
}

export default SearchForm