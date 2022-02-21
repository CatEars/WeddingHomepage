FROM node:17.5.0-alpine3.14 as builder
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY ./src ./src
RUN npm run build

FROM node:17.5.0-alpine3.14 as ts-remover
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
RUN npm install --production

FROM node:17.5.0-alpine3.14 as runner
ENV ENVIRONMENT=production \
    PORT=3000 \
    STORAGE_AREA=/tmp \
    SECRET=HelloWorld \
    USER_TOKEN=1cde9145-377a-46cb-90be-3e3d765f3409 \
    LOGIN_ROOT=/www/login \
    CONTENT_ROOT=/www/content
WORKDIR /app
COPY --from=ts-remover /app /app
COPY ./content-build /www/content/info
COPY ./login-build /www/login/login
CMD node build/index.js