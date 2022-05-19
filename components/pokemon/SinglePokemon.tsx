import { Grid, Card, Button, Container, Text, Image } from "@nextui-org/react";
import React, { FC } from "react";
import { Pokemon } from '../../interfaces/single-pokemon';
import { PokemonDescriptionCard } from './PokemonDescriptionCard';

interface Props {
  pokemon: Pokemon
}

export const SinglePokemon: FC<Props> = ({pokemon}) => {
  return (
    <Grid.Container
      css={{
        marginTop: "5px",
      }}
      gap={2}
    >
      
      <Grid xs={12} sm={4}>
        <Card hoverable css={{ padding: "30px" }}>
          <Card.Body>
            <Card.Image
              src={
                pokemon?.sprites?.other?.dream_world?.front_default ||
                "/no-image.png"
              }
              alt={pokemon?.name}
              width={"100%"}
              height={200}
            />
          </Card.Body>
        </Card>
      </Grid>
      <PokemonDescriptionCard pokemon={pokemon} />
    </Grid.Container>
  );
};
