import React from 'react'

const Search = ({onChange, onKeyUp, value}) => (
    <input
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={value}
        placeholder="Busca alguna pelicula de tu agrado"
    />
)

export default Search;