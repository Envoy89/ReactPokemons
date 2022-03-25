### STAGE 1: Build UI ###
FROM node:12 AS buildClient

RUN mkdir -p app
WORKDIR /app

RUN npm install yarn

COPY ./client/package*.json ./
RUN yarn install

COPY ./client .
RUN yarn run build:prod

### STAGE 2: Build backend ###
FROM node:12

RUN mkdir -p app
WORKDIR /app

RUN npm install yarn

COPY ./backend/package*.json ./
RUN yarn install

COPY ./backend .
RUN yarn run build

COPY --from=buildClient /app/dist /app/dist/static/

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]