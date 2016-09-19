FROM node:6
MAINTAINER SmartCar

RUN mkdir -p /usr/smartcar/gm
WORKDIR /usr/smartcar/gm

COPY . .

RUN npm install nodemon -g -q \
    && npm install mocha -g -q \
    && npm install -q

EXPOSE 3000
