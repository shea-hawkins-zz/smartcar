FROM node:6
MAINTAINER SmartCar

RUN mkdir -p /usr/smartcar/api
WORKDIR /usr/smartcar/api

COPY . .

RUN npm install nodemon -g -q \
    && npm install mocha -g -q \
    && npm install -q

EXPOSE 3000
