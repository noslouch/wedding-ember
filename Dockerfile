FROM node:8.6.0

WORKDIR /usr/src/app
COPY package.json package-lock.json ./

RUN npm install

RUN npm install -g ember-cli@2.15.1

COPY . .

RUN ember build -prod
RUN rm -rf tmp node_modules

EXPOSE 8001

ENV VIRTUAL_HOST="melissaandbriangetmarried.com"
ENV VIRTUAL_PORT="8001"
ENV LETSENCRYPT_EMAIL="bwhitton@gmail.com"
ENV LETSENCRYPT_HOST="melissaandbriangetmarried.com"

RUN npm i --production
CMD PORT=8001 node fastboot.js
