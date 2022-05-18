import Image from "next/image";
import { Spacer, useTheme, Text } from "@nextui-org/react";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 30px 0px 0px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
        alt="Poke Logo"
        width={90}
        height={90}
      />
      <Text color="white" h1>
        P
      </Text>
      <Text color="white" h2>
        okémon
      </Text>
      <Spacer css={{flex: 1}} />
      <Text color="white" h2>
        Favoritos
      </Text>
    </div>
  );
};
