FROM node:12-alpine

WORKDIR /app

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock

RUN yarn install

ADD . /app

RUN yarn build

EXPOSE "${APP_PORT}"

CMD ["yarn", "start:prod"]