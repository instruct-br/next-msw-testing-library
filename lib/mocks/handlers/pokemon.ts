import { rest } from "msw";

import { bulbasaur } from "./pokemons/bulbasaur";
import { charmander } from "./pokemons/charmander";
import { squirtle } from "./pokemons/squirtle";

export const pokemonHandlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/:name", (req, res, ctx) => {
    const pokemons: Record<string, any> = {
      bulbasaur,
      charmander,
      squirtle,
    };
    const pokemonName = req.params.name as string;
    const pokemon = pokemons[pokemonName];

    if (!pokemon) {
      return res(
        ctx.status(404),
        ctx.json({
          detail: `Not found.`,
        })
      );
    }

    return res(ctx.status(200), ctx.json(pokemon));
  }),
];
