# Use a base image with Node.js
FROM node:20 AS build

ARG VITE_GA_MEASUREMENT_ID
ARG VITE_EXPRESS_SERVER_ADDR
ENV VITE_EXPRESS_SERVER_ADDR=$VITE_EXPRESS_SERVER_ADDR
ENV VITE_GA_MEASUREMENT_ID=$VITE_GA_MEASUREMENT_ID

# Set the working directory
WORKDIR /app

COPY . .

# Install dependencies for the server
WORKDIR /app/server
RUN npm install

# Build the server
RUN npm run build

# Install dependencies for the web
WORKDIR /app/web
RUN npm install

# Build the web
RUN npm run build

FROM node:20

WORKDIR /app
COPY --from=build /app/web/dist web
COPY --from=build /app/server/dist server
COPY --from=build /app/server/node_modules server/node_modules

# Expose ports (optional, for documentation purposes)
EXPOSE ${SERVER_PORT}
EXPOSE ${WEB_PORT}
EXPOSE ${MONGO_URI}

# Install PM2 globally
RUN npm install -g pm2 serve

# Start the server with PM2 and serve the web
CMD ["sh", "-c", "pm2 start server/index.js && serve -s web -l ${WEB_PORT} && pm2 logs"]
