FROM node:lts-alpine3.13

WORKDIR /pokemon-api

CMD ["yarn", "devStart"]