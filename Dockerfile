FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# RUN mkdir -p node_modules/ && chown -R node.node node_modules/
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

# RUN chown -R node.node /usr/node_modules

COPY . ./

CMD npm run dev