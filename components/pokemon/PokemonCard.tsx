import { Text, Card, Grid, Row } from "@nextui-org/react";
import React from "react";
import { SmallPokemon } from "interfaces/pokemon-list";
import { useRouter } from "next/router";

export const PokemonCard = ({ name, id, img }: SmallPokemon) => {
  const { Footer, Body } = Card;

  const router = useRouter();

  const onClickCard = (id: number) => {
    router.push("/pokemon/" + id);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={name}>
      <Card hoverable clickable onClick={() => onClickCard(id)}>
        <Body css={{ p: 1 }}>
          <Card.Image width={"100%"} height={170} src={img} />
        </Body>

        <Footer>
          <Row justify="space-between">
            <Text transform="capitalize"> {name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Footer>
      </Card>
    </Grid>
  );
};
