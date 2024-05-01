#Install dependencies inly when needed
FROM --platform=linux/amd64 node:18.17.0-alpine
ENV NODE_ENV=production
ENV NEXT_URL_BASE=192.168.1.209
ENV SERVER_PORT=3000

WORKDIR /app

COPY package*.json /app/

RUN npm install && npm cache clean --force

COPY . /app/

RUN npm run build

EXPOSE $SERVER_PORT

CMD ["npm", "start"]



