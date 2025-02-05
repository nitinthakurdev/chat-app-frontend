FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY . .
# env 
ENV VITE_BASE_ENDPOINT=http://localhost:4000

RUN bun install

EXPOSE 5173

CMD [ "bun" ,"dev" ]
