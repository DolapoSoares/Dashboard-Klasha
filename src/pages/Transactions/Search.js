import React from "react"
import PropTypes from "prop-types"
import { SearchIcon } from "assets/svg"

const Search = ({ type, placeholder, ...rest }) => {
  return (
    <form>
      <div className="custom-search">
        <input
          type={type || "search"}
          placeholder={placeholder || "search..."}
          {...rest}
        />
        <SearchIcon color="#575757" />
      </div>
    </form>
  )
}

Search.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Search
