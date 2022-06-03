FROM node:12 AS build

WORKDIR /var/www

COPY . .

RUN yarn install \
  && sed -i "/^module\.exports.*/a \  base: '\/<%= PAYMENT_TAG %>\/<%= ECOMMERCE_TAG %>\/'," ./src/.vuepress/config.js \
  && cat ./src/.vuepress/config.js \
  && yarn build

FROM nginx

COPY --from=build /var/www/src/.vuepress/dist /usr/share/nginx/html/<%= PAYMENT_TAG %>/<%= ECOMMERCE_TAG %>