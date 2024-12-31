# Use the official Node.js image with the specified version
FROM node:22.11.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only necessary files to the working directory
COPY package.json yarn.lock ./

# Install backend dependencies using Yarn
RUN yarn install

RUN mkdir frontend

COPY /frontend/package.json /frontend/yarn.lock ./frontend

RUN cd frontend && yarn install

# Copy the remaining code
COPY . .

# Build the javascript code
RUN yarn build

RUN cd frontend && yarn build

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application
CMD ["yarn", "start"]
