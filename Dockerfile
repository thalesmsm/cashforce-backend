FROM node:16-alpine

WORKDIR /app-back

COPY . .

RUN npm install --silent

CMD [ "npm", "run", "dev" ]
