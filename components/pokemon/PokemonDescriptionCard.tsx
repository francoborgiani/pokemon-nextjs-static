import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import React, { FC } from "react";
import { Pokemon } from '../../interfaces/single-pokemon';

interface Props {
  pokemon: Pokemon;
}

export const PokemonDescriptionCard: FC<Props> = ({ pokemon }) => {
  return (
    <Grid xs={12} sm={8}>
      <Card>
        <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
          <Text transform="capitalize" h1>
            {pokemon.name}
          </Text>

          <Button color="gradient" ghost>
            Guardar en favoritos
          </Button>
        </Card.Header>
        <Card.Body>
          <Text size={30}>Sprites: </Text>
          <Container
            css={{
              display: "flex",
            }}
          >
            <Image
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name} Front Default`}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.back_default}
              alt={`${pokemon.name} Back Default`}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.front_shiny}
              alt={`${pokemon.name} Front Shiny`}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.back_shiny}
              alt={`${pokemon.name} Back Shiny`}
              width={100}
              height={100}
            />
          </Container>
        </Card.Body>
      </Card>
    </Grid>
  );
};
