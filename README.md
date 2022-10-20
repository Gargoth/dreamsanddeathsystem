# Dreams and Death - Foundry VTT System

This game system by Sseventeen was made for the campaign "Dreams and Death", but it can also be used in other settings. While initially based on the DnD5e system, it features a modular approach to character creation, as opposed to other TTRPG system's class-based approach. 

This system is planned to contain all mechanics and data described in the [system document](https://docs.google.com/document/d/1nhrAVppXUBosIOZ6HIEpDuepT2CnFjNIDQG6DrEwnrw/edit#heading=h.1jwkzt2mqljo).

## npm scripts

- `pack`

`npm run pack`

The `pack` script overwrites the `packs/` directory with new `.db` files made from the JSON files in `src/packs/<packName>/`

- `less`

`npm run less`

The `less` script transpiles the `.less` files in `src/style/` into css with `src/style/dreamsanddeath.less` as the starting point.

- `watch`

`npm run watch`

The `watch` script watches for changes in `src/style/*.less` and `src/packs/*/*.json` and runs either `pack` or `less` whenever the corresponding files are changed.
