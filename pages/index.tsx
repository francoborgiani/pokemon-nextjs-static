import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { ReactElement } from "react";
import { GetStaticProps, NextPage  } from 'next';
import { pokeApi } from "../api";
import { AxiosResponse } from "axios";
import { PokemonsListResponse, SmallPokemon } from '../interfaces/pokemon-list';

type NextPageWithLayout<data> = NextPage<data> & {
  getLayout?: (page: ReactElement) => ReactElement;
}

interface Props {
  pokemons:  SmallPokemon[];
}

const HomePage: NextPageWithLayout<Props> = (props) => {
  return (
    <>
      <ul>
        {
          props.pokemons?.map(poke => (
            <li key={poke.id}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
          ))
        }
      </ul>
    </>
  );
};
HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonsListResponse>("/pokemon?limit=151")
  console.log({data})

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default HomePage;
