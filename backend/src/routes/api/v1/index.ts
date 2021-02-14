import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

import pokemons from '../../../models/Pokemons';
import { IPokemonsRequest, IPokemonsResponse } from '../../../interfaces/routes/pokemons';

const router = express.Router();

router.get('/pokemons', (req: Request<{}, {}, {}, IPokemonsRequest>, res: Response) => {
    try {
        const filters: IPokemonsRequest = {
            name: req.query.name && req.query.name,
            limit: req.query.limit && +req.query.limit,
            offset: req.query.offset && +req.query.offset
        }
        const output: IPokemonsResponse = pokemons.getFilteredPokemons(filters);
        res.status(200).send(output);
    } catch (e) {
        console.log(e.message);
        res.status(404).send(e.message);
    }
});

export default router;