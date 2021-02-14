"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var Pokemons = /** @class */ (function () {
    function Pokemons() {
        var fileUrl = path_1.default.resolve('./dist/pokemons.json');
        var rawData = fs_1.default.readFileSync(fileUrl);
        this.data = JSON.parse(rawData.toString());
    }
    Pokemons.prototype.getFilteredPokemons = function (filter) {
        var name = filter.name, _a = filter.limit, limit = _a === void 0 ? 12 : _a, _b = filter.offset, offset = _b === void 0 ? 0 : _b;
        var result = {
            total: this.data.total,
            count: 0,
            offset: offset,
            limit: limit,
            pokemons: []
        };
        var pokemons = this.data.pokemons.filter(function (elem) { return !name || elem.name_clean.includes(name); });
        for (var i = offset; i < limit + offset; i++) {
            if (pokemons[i]) {
                result.pokemons.push(pokemons[i]);
                result.count++;
            }
        }
        result.total = pokemons.length;
        return result;
    };
    return Pokemons;
}());
var pokemons = new Pokemons();
exports.default = pokemons;
