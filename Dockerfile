FROM hub.hamdocker.ir/node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npx tsc

EXPOSE 3000

CMD [ "yarn", "start" ]