# FROM node:latest 
# WORKDIR /app
# COPY package*.json .
# RUN npm install
# COPY . .
# RUN npm run build

FROM nginx:1.17.1-alpine
COPY /build /usr/share/nginx/html