TAG=`git rev-parse HEAD`
docker build --progress plain -t registry.storefrontcloud.io/docs-storefrontcloud-io/v2-payment-<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>:${TAG:0:8} -f Dockerfile ../../../../docs-<%= ECOMMERCE_TAG %>
docker push registry.storefrontcloud.io/docs-storefrontcloud-io/v2-payment-<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>:${TAG:0:8}
