FROM node:15.5.0

RUN mkdir /pokemon-api
WORKDIR /pokemon-api

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "devStart"]