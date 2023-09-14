# To build and run the Docker container:

# 1. Build the image
# Command: "docker build -t commcat:v1.0 ."

# 2. Run the container with the --env-file flag, to pass in environment variables stored in a separate local file
# Command: "docker run --env-file .env -p 3000:3000 commcat:v1.0"

FROM node:18 AS ngbuilder

WORKDIR /app

COPY client/src src
COPY client/angular.json .
COPY client/package.json .
COPY client/package-lock.json .
COPY client/tsconfig.app.json .
COPY client/tailwind.config.js .

RUN npm i -g @angular/client

RUN npm i

RUN ng build

FROM maven:3-eclipse-temurin-20 AS mvnbuilder

WORKDIR /app

COPY server/src src
COPY server/mvnw .
COPY server/pom.xml .

COPY --from=ngbuilder /app/dist/client /app/src/main/resources/static

RUN mvn clean package -Dmaven.test.skip=true

FROM openjdk:20-slim

WORKDIR /app

COPY --from=mvnbuilder /app/target/server-0.0.1-SNAPSHOT.jar app.jar

COPY .env .

ENTRYPOINT SERVER_PORT=${PORT} java -jar /app/app.jar