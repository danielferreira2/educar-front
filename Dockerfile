FROM node:14.17.4

# Create app directory
WORKDIR /usr/src/educar-app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available
COPY package*.json yarn.lock ./

# Run yarn without generating a yarn.lock file
RUN yarn --pure-lockfile

# Bundle app source
COPY . .

# Use the port
EXPOSE 3000

CMD ["yarn", "start"]
