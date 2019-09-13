
FROM mhart/alpine-node:11.9.0

WORKDIR /src

RUN npm install -g nodemon
RUN npm install -g npx
RUN pwd && ls
RUN npm install

COPY . . 

EXPOSE 3000 9229
