// NEXT IMPORTS
import { NextPage } from "next/types";
import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
// REACT IMPORTS
import React, { ReactElement } from "react";
// LAYOUT
import { Layout } from "components/layouts";
// COMPONENTS
import { SinglePokemon } from "components/pokemon";
// INTERFACES
import { Pokemon } from 'interfaces';
// REQUESTS
import { pokeApi } from "api";


// TYPES
type NextPageWithLayout<data> = NextPage<data> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

interface Props {
  pokemon: Pokemon;
}


// PAGE
export const SinglePokemonPage: NextPageWithLayout<Props> = ({ pokemon }) => {
  return (
    <SinglePokemon pokemon={pokemon} />
  );
};
SinglePokemonPage.getLayout = function getLayout(page) {
  return <Layout title="Single Pokemon">{page}</Layout>;
};


// STATIC PATHS
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsLength = [...Array(151)].map((_value, index) => `${index + 1}`);

  return {
    paths: pokemonsLength.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};


// STATIC PROPS
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>("/pokemon/" + id);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default SinglePokemonPage;
