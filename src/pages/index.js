import React, { useState, useEffect } from 'react';

import Layout from "../components/layout"
import Header from "../components/header/header"
import Search from "../components/search/search"
import Pokemons from "../components/pokemons/pokemons"

const IndexPage = () => {
    const [hasError, setErrors] = useState(false);
    const [pokemons, setPokemons] = useState({});


    async function fetchData() {
        const res = await fetch("https://fight.pokebattler.com/pokemon");
        res
            .json()
            .then(res => setPokemons(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <Layout>
            <Header siteTitle="PokétInfo!" />
            <Search />
            <Pokemons pokemons={pokemons} hasError={hasError} />
        </Layout>
    );
};

export default IndexPage
