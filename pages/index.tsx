import { Grid } from "@nextui-org/react";
import { Layout } from "components/layouts";
import { ReactElement } from "react";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "api";
import { PokemonsListResponse, SmallPokemon } from "interfaces/pokemon-list";
import { PokemonCard } from "components/pokemon";

type NextPageWithLayout<data> = NextPage<data> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPageWithLayout<Props> = (props) => {
  return (
    <>
      <Grid.Container gap={2} justify="flex-start">
        {props.pokemons?.map((poke) => (
          <PokemonCard key={poke.id} {...poke}/>
        ))}
      </Grid.Container>
    </>
  );
};
HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsListResponse>(
    "/pokemon?limit=151"
  );

  const pokemons: SmallPokemon[] = data.results.map((el, index) => ({
    id: index + 1,
    name: el.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
    url: el.url,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
