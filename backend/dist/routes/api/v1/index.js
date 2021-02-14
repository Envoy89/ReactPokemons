"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Pokemons_1 = __importDefault(require("../../../models/Pokemons"));
var router = express_1.default.Router();
router.get('/pokemons', function (req, res) {
    try {
        var filters = {
            name: req.query.name && req.query.name,
            limit: req.query.limit && +req.query.limit,
            offset: req.query.offset && +req.query.offset
        };
        var output = Pokemons_1.default.getFilteredPokemons(filters);
        res.status(200).send(output);
    }
    catch (e) {
        console.log(e.message);
        res.status(404).send(e.message);
    }
});
exports.default = router;
