FROM node:18.15.0-alpine3.17 AS build-stage
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

RUN npm run build


FROM nginx:1.12-alpine

# RUN addgroup app && adduser -S -G app app

# USER app

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80


ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


EXPOSE 3000