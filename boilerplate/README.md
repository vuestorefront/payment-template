<div align="center">
<img src="https://blog.vuestorefront.io/wp-content/uploads/2020/01/1QU9F6hQlFyHsJIbsdmt6FA.png" height="80px"/>  <img src="<%= PAYMENT_LOGO_SRC %>" height="80px"/>
</div>

## How to start the project

1. Clone the repository.
2. Replace occurences of these keywords with values related to your eCommerce and Payment Service Provider. Below I put a list with example values:

- <%= PAYMENT_LOGO_SRC %> - `https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg` (used above)
- <%= PAYMENT_TAG %> - paypal (e.g. `@vsf-enterprise/paypal-commercetools`),
- <%= PAYMENT_NAME %> - PayPal (e.g. `To install PayPal integration`),
- <%= PAYMENT_CAPITALIZED_TAG %> - Paypal (e.g. `usePaypal.ts`),
- <%= ECOMMERCE_TAG %> - commercetools (e.g. `@vsf-enterprise/paypal-commercetools`),
- <%= ECOMMERCE_NAME %> - commercetools (e.g. `integration for the commercetools module`),
- <%= ECOMMERCE_CAPITALIZED_TAG %> - Elasticpath (e.g. `integration for the elasticpath module`),
- <%= AUTHOR_NAME %> - Fifciu.

3. Find `TODO` occurences in the repository and apply these things.

## Alokai integration with <%= PAYMENT_NAME %>

This project is an <%= PAYMENT_NAME %> integration for Alokai.
This integration is developed by Alokai Core Team.

Currently, it works only for <%= ECOMMERCE_NAME %>.

## How to start if you want to try out the integration

```sh
yarn add @vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>
```

Then follow [document](https://docs.vuestorefront.io/<%= PAYMENT_TAG %>/<%= ECOMMERCE_TAG %>/guide/installation.html#setup) describing basic setup of the integration.

### Requirements

- NodeJS v14 or later
- <%= PAYMENT_NAME %> account
- <%= ECOMMERCE_NAME %> project

### Steps

1. Create a wrapper directory called `<%= PAYMENT_TAG %>-workspace` and go inside.
2. Clone [<%= PAYMENT_NAME %> repository](https://github.com/vuestorefront/<%= PAYMENT_TAG %>) to `<%= PAYMENT_TAG %>` directory.
3. Generate theme via [enterprise-theme](https://github.com/vuestorefront/enterprise-theme) or `Alokai CLI` and put generated theme in `theme` directory.
4. Install dependencies inside `<%= PAYMENT_TAG %>` directory via `yarn` command.
5. Go to the `theme` directory and run these commands:

```sh
yarn add -D @loopmode/crosslink;
yarn add @vsf-enterprise/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>;
```

6. Inside `theme/package.json` add `crosslink` looking section like that:

```js
"crosslink": [
  "../<%= PAYMENT_TAG %>/packages/<%= ECOMMERCE_TAG %> -> node_modules"
]
```

And script (to `scripts` part):

```js
"link-<%= PAYMENT_TAG %>": "yarn crosslink --overwrite",
```

7. Run `yarn link-<%= PAYMENT_TAG %>` inside `theme` directory (you have to do it again after each `yarn` call).
8. Run `yarn link-theme` inside `<%= PAYMENT_TAG %>` directory (you have to do it again after each `yarn` call).
9. Run `yarn build` in `<%= PAYMENT_TAG %>` directory.
9. Run `yarn dev` in `<%= PAYMENT_TAG %>` directory.
10. Setup <%= PAYMENT_NAME %> in your `theme`. Base on these documents:

- [Installation](https://docs.vuestorefront.io/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>/guide/installation.html),
- [Usage](https://docs.vuestorefront.io/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>/guide/usage.html).

11. Run `yarn dev` in `theme` directory.

## Resources

- [<%= PAYMENT_NAME %> <%= ECOMMERCE_NAME %> integration Documentation](https://docs.vuestorefront.io/<%= PAYMENT_TAG %>-<%= ECOMMERCE_TAG %>)
- [Community Chat](http://discord.vuestorefront.io)

## Support

If you have any questions about this integration we will be happy to answer them on `another` channel on [our Discord](http://discord.vuestorefront.io).
The most familiar person with the integration is [<%= AUTHOR_NAME %>](https://github.com/<%= AUTHOR_NAME %>), feel free to ask him about anything.
