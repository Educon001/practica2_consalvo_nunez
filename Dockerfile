# Use the official Node.js LTS image as the base image
FROM node:18.17

# Create a working directory for the application
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port your Nest.js app will run on (8000)
EXPOSE 8000

# Start the Nest.js application
ENTRYPOINT ["entrypoint.sh"]
