# Installation

To install <%= PAYMENT_NAME %> integration for the <%= ECOMMERCE_NAME %> module in your Vue Storefront application, use the following command:

<code-group>
  <code-block title="YARN">
  ```bash
  yarn add @vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>
  ```
  </code-block>

  <code-block title="NPM">
  ```bash
  npm install @vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %> --save
  ```
  </code-block>
</code-group>

## Setup

Add `@vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>` to `dev` and `prod` arrays in `useRawSource` object:

```javascript{11,16}
// nuxt.config.js

export default {
  buildModules: [
    ['@vue-storefront/nuxt', {
      coreDevelopment: true,
      useRawSource: {
        dev: [
          '@vue-storefront/<%= ECOMMERCE_TAG %>',
          '@vue-storefront/core',
          '@vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>'
        ],
        prod: [
          '@vue-storefront/<%= ECOMMERCE_TAG %>',
          '@vue-storefront/core',
          '@vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>'
        ]
      }
    }]
  ]
};
```

Register the `@vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>/nuxt` module with the following configuration:

```javascript
// nuxt.config.js

export default {
  modules: [
    ['@vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>/nuxt', {}]
  ]
};
```

:::tip
If you are also using the `nuxt-i18n` module, you must register both packages in the proper order. You can read more about it [here](https://docs.vuestorefront.io/v2/reference/migrate/2.5.0/overview.html#changes-in-the-internal-internationalization-logic).

Generally, we recommend placing the `@vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>/nuxt` module at the very top of the array.
:::

TODO: Describe additional configuration inside `nuxt.config.js`.

Add `@vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>/server` integration to the middleware with the following configuration:

```javascript
// middleware.config.js

module.exports = {
  integrations: {
    // ...
    <%= PAYMENT_TAG %>: {
      location: '@vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>/server',
      configuration: {
        // TODO
      }
    }
  }
}
```

TODO: Describe additional configuration inside `middleware.config.js`.

## Usage on the frontend

Add `Payment<%= PAYMENT_CAPITALIZED_TAG %>Provider.vue` components to the last step of the checkout process.

```vue{3-5,10,14}
<template>
  <div>
    <Payment<%= PAYMENT_CAPITALIZED_TAG %>Provider
      :afterPay="afterPayAndOrder"
    />
  </div>
</template>

<script>
import Payment<%= PAYMENT_CAPITALIZED_TAG %>Provider from '@vsf-enterprise/<%= PAYMENT_TAG %>-commercetools/src/components/Payment<%= PAYMENT_CAPITALIZED_TAG %>Provider';

export default {
  components: {
    Payment<%= PAYMENT_CAPITALIZED_TAG %>Provider
  }
};
</script>
```

`afterPay` props expect a callback function called after authorizing the payment is authorized and placing an order. You can redirect the user to the order confirmation page and clear the cart inside this callback.

```vue
<script>
export default {
  setup() {
    const afterPayAndOrder = ({ order }) => {
      router.push({ path: localePath(`/checkout/thank-you?order=${order.id}`) });
      setCart(null);
    };

    return {
      afterPayAndOrder
    };
  }
};
</script>
```

`afterPay` signature:
```ts
(params: TODO) => TODO;
```

## Placing an order

The integration will place an order in <%= ECOMMERCE_NAME %> and add the `order` object to the response if the transaction is authorized. It only makes one request from the client to finalize/authorize payment and make an order.

## Webhook

In <%= PAYMENT_NAME %>'s dashboard, add a webhook with the following configuration:

* Webhook URL: `https://<your_vsf2_app_domain>/api/<%= PAYMENT_TAG %>/webhook`,

TODO: Add detials

## Testing webhook locally

If you want to check if webhook works during local development, use the [`ngrok`](https://ngrok.com/) or [`localtunnel`](https://github.com/localtunnel/localtunnel#quickstart) tools and set Sandbox Webhook URL to generated tunnel's URL.
