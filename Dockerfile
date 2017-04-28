FROM node:latest
MAINTAINER Monoku
RUN mkdir -p /app/user
RUN mkdir -p /app/admin
ADD package.json /app/
ADD admin/package.json /app/admin
RUN cd app && npm install
RUN cd app/admin && npm install
WORKDIR /app/user
