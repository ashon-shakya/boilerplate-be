# Use the official Node.js 20 image as the base image
FROM node:20

# Create a new directory in the container to hold the application code
RUN mkdir -p /workspace/node-boilerplate

# Set the working directory to the new directory
WORKDIR /workspace/node-boilerplate

# Copy the package.json and package-lock.json files to the container
COPY package.json ./
COPY src ./src

RUN npm install

EXPOSE 8080
CMD ["node","src/server.js"]