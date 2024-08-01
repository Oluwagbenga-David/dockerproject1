FROM node:22-alpine 

COPY package.json /app/
COPY src_code /app/

WORKDIR /app

RUN npm install

CMD ["node", "web_app.js"]