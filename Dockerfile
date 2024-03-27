FROM node:18-alpine

WORKDIR /apps/core

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# COPY .next /apps/core/.next

CMD ["npm", "run", "dev"]
