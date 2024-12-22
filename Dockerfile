# Use an official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install pm2 -g

# Copy the rest of the application code to the container
COPY . ./

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set the default command to use PM2 to run the app
CMD ["pm2-runtime", "npm", "--", "start"]
