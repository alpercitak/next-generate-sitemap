FROM node:25-alpine AS base

WORKDIR /app
RUN npm i -g pnpm
COPY ./pnpm-lock.yaml .
RUN pnpm fetch

FROM base AS build

ENV BUILD_TYPE=docker
ENV NEXT_TELEMETRY_DISABLED=1

COPY ./package.json .
RUN pnpm i --offline

COPY . .
RUN pnpm build

FROM nginx:1.29.5-alpine-slim AS deploy

COPY nginx /etc/nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/out .
