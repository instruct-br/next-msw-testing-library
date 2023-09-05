"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Select, { SelectOption } from "./components/Select";
import axios from "axios";

interface Pokemon {
  id: number;
  species: {
    name: string;
    url: string;
  };
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
}

export default function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState({} as Pokemon);
  const hasPokemon = !!pokemonInfo.id;

  const options: SelectOption[] = [
    { value: "bulbasaur", label: "Grama" },
    { value: "charmander", label: "Fogo" },
    { value: "squirtle", label: "Água" },
  ];

  function handleSelectChange(option: SelectOption) {
    setPokemonName(option.value);
  }

  useEffect(() => {
    if (pokemonName) {
      axios
        .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
          setPokemonInfo(response.data);
        });
    }

    return () => {
      setPokemonInfo({} as Pokemon);
    };
  }, [pokemonName]);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <main className="">
      <header className="flex justify-center items-center h-28 bg-gray-50">
        <Select options={options} onChange={handleSelectChange} />
      </header>
      <div className="mt-48">
        {hasPokemon && (
          <div className="flex flex-col items-center">
            <Image
              priority
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
              alt={pokemonInfo.species.name}
              width={192}
              height={192}
            />
            <span className="text-4xl font-bold mb-8">
              {capitalizeFirstLetter(pokemonInfo.species.name)}
            </span>

            <div className="flex flex-col items-center gap-2">
              <span className="text-xl">Tipos</span>
              <div className="flex gap-4">
                {pokemonInfo.types.map((type) => (
                  <span key={type.type.name} className="text-xl font-semibold">
                    {capitalizeFirstLetter(type.type.name)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}{" "}
      </div>
    </main>
  );
}
