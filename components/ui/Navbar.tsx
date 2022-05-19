import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Spacer, useTheme, Text } from "@nextui-org/react";

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
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="Poke Logo"
        width={90}
        height={90}
      />
      <Link href="/">
        <Text css={{cursor: "pointer"}} color="white" h1>
          P
        </Text>
      </Link>
      <Link href="/">
        <Text css={{cursor: "pointer"}} color="white" h2>
          okémon
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Text color="white" h2>
        Favoritos
      </Text>
    </div>
  );
};
