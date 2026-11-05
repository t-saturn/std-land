# syntax=docker/dockerfile:1.7
# =====================================================================
#  sgd-land (Vite). Solo produce el build estático (dist/); en producción
#  lo sirve Payara: la imagen del SGD (sgd/Dockerfile.stage) la compila
#  dentro de su propio build. Este archivo sirve para probarla aislada:
#    docker buildx build --target export -o type=local,dest=./dist .
# =====================================================================
ARG BUN_VERSION=1.3.5

FROM scratch AS entity

FROM oven/bun:${BUN_VERSION} AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
COPY --from=entity / ./
RUN bun run build

FROM scratch AS export
COPY --from=build /app/dist /
