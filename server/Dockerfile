FROM node:12.13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 5000

RUN npm install

COPY . .

CMD ["npm", "run", "start"]