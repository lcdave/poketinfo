import React from 'react'

const Pokemons = ({ pokemons }, {hasError}) => {
  return (
    <div>
        <span>{JSON.stringify(pokemons)}</span>
        <hr />
        <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  )
};

export default Pokemons