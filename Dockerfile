# Use an official, lightweight Node base image
FROM node:18-alpine

WORKDIR /app

# Copy the application code
COPY index.js .

# Expose the port
EXPOSE 8080

# Run the application
CMD ["node", "index.js"]
