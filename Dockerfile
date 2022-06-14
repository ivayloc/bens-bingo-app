# Stage 1
FROM node:14.15.5-alpine3.13 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Stage 2
FROM nginx:1.21.6-alpine
COPY --from=build-step app/dist/bens-bingo-app /usr/share/nginx/html