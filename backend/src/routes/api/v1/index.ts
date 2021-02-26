import express, { Request, Response } from "express";

import pokemons from "../../../models/Pokemons";
import {
  IPokemonsRequest,
  IPokemonsResponse,
} from "../../../interfaces/routes/pokemons";

const router = express.Router();

router.get(
  "/pokemons",
  (req: Request<{}, {}, {}, IPokemonsRequest>, res: Response) => {
    try {
      const filters: IPokemonsRequest = {
        ...req.query,
        name: req.query.name && req.query.name,
        limit: req.query.limit && +req.query.limit,
        offset: req.query.offset && +req.query.offset,
      };
      const output: IPokemonsResponse = pokemons.getFilteredPokemons(filters);
      res.status(200).send(output);
    } catch (e) {
      console.log(e.message);
      res.status(404).send(e.message);
    }
  }
);

router.get("/pokemons/types", (req: Request, res: Response) => {
  try {
    const types = pokemons.getAllTypes();
    res.status(200).send(types);
  } catch (e) {
    console.log(e.message);
    res.status(404).send(e.message);
  }
});

export default router;
