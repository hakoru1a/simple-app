FROM node:16-alpine

# Create app directory
WORKDIR /app

# Install dependencies
# A Wildcard to make sure that we will copy both package.json and package-lock.json
COPY package*.json /app/

RUN npm install

# Bundle app source
COPY . .

# Expose the app on port 8080
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
