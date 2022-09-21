import React from 'react'

const SearchBox = () => {
  return (
    <div className="search-field">
      <form>
        <img src="./icons8-search.svg" className="icon" alt="search-icon" />
        <input type="text" placeholder="Food name" />
      </form>
    </div>
  )
}

export default SearchBox