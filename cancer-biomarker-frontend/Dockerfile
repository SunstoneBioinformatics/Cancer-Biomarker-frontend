# Use an official Node runtime as a parent image
FROM node:12.7.0-alpine

# Set the working directory to /app
WORKDIR /app
# Copy package.json to the working directory
COPY package.json .

# Install any needed packages specified in package.json
RUN npm i

# Copying the rest of the code to the working directory
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 5050

# Run index.js when the container launches
RUN npm i -g serve
RUN npm run-script build
ENTRYPOINT serve -l 5050 -s build