# FROM node:latest 
# WORKDIR /app
# COPY package*.json .
# RUN npm install
# COPY . .
# RUN npm build

# FROM nginx:1.17.1-alpine
# COPY /build /usr/share/nginx/html

FROM node:13.12.0-alpine as build
WORKDIR /src
ENV PATH /node_modules/.bin:$PATH
COPY package*.json ./

RUN npm install --silent
COPY . ./

RUN npm run build

FROM nginx:alpine
COPY --from=build /src/build /usr/share/nginx/html
EXPOSE 80