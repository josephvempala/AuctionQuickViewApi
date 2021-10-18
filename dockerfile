FROM node:current-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","run", "start"]