FROM node:16

WORKDIR /frontend

COPY package.json /frontend/

RUN npm install

COPY . /frontend/

EXPOSE ${PORT}

CMD ["npm", "run", "start"]