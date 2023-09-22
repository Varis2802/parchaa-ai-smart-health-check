FROM node:16-alpine

WORKDIR /parchaa-ai-health-check

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

