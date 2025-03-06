# Use the official Node.js image
FROM node:22.11.0-alpine

# Set working directory
WORKDIR /app

# Copy and install backend dependencies first
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy and install frontend dependencies in a single step
WORKDIR /app/frontend
COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the remaining code AFTER dependencies are installed (cache optimization)
WORKDIR /app
COPY . .

# Build backend and frontend
RUN yarn build && yarn --cwd frontend build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
