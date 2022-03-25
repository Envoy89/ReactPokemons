# ReactPokemons

Training project about pokemons based on react and node

## Запуск для разработки

### server

1. `cd ./backend`
2. `npm install yarn`
3. `yarn install`
4. `yarn run start:watch`

### client

1. `cd ./client`
2. `npm install yarn`
3. `yarn install`
4. `yarn start`

## Запуск как внутри docker контейнера

1. `cd ./client`
2. `npm install yarn`
3. `yarn install`
4. `yarn run build:prod`
5. `cd ./backend`
6. `npm install yarn`
7. `yarn install`
8. `yarn start`

## Полный запуск

1. `docker build -t envoy89/pokemons:0.0.1 .`
2. `docker run -p 3000:3000 --name pokemons envoy89/pokemons:0.0.1`
