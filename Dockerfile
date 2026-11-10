# This repo brings its own Dockerfile, so Kairo keeps it as it is (FR-25).
# It listens on $PORT, which Kairo injects (3000).
FROM node:22-alpine
WORKDIR /srv
COPY package.json server.js ./
USER node
ENV PORT=8080
EXPOSE 8080
CMD ["node", "server.js"]
