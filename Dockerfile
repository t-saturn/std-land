# Etapa de compilación
FROM node:20-alpine AS build
WORKDIR /app

# Instala deps (ajusta según tu gestor)
COPY package*.json ./
RUN npm ci

# Copia el resto y compila
COPY . .
RUN npm run build

# Etapa "export" (sólo artefacto)
FROM scratch AS export
COPY --from=build /app/dist /


# docker buildx build  -f .\std-land\Dockerfile  --target export  -o type=local,dest=./std/dist  .\std-land
