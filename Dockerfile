FROM node:latest

RUN apt-get update && \
    apt-get install -y graphicsmagick && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/piccolo

WORKDIR /var/piccolo

COPY . .

RUN npm install

EXPOSE 3000

HEALTHCHECK --interval=20s --timeout=3s \
  CMD curl -f http://localhost:3000/ || exit 1

CMD npm start