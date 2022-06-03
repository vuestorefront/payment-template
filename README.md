# Payment Boilerplate

This tool allows generating projects for your VSF2 x eCommerce x Payment Service Provider integration fastly. The output is a perfect starting point for maintaining a Payment Service Provider integration.

## How to install

1. Clone the repository.
2. Install dependencies via `yarn`.

## How to generate project

Use `yarn generate` command with required flags as presented below:

```sh
yarn generate \
--ecommerce:tag ct \
--ecommerce:capitalizedTag Commercetools \
--ecommerce:name commercetools \
--author:name Fifciu \
--payment:tag pp \
--payment:name PayPal \
--payment:capitalizedTag Paypal \
--payment:logoSrc https://uploads-ssl.webflow.com/5e7cf661c23ac9df156d9c3d/5eb01763b8d39cb1427e86f2_PayPal%201.svg
```

Optional flags:
`--misc:enterprise` - set as `true` if you are developing a package as a VSF Core team and it will be enterprise one.

Project will be generated in the `<PAYMENT_TAG>-<ECOMMERCE_TAG>-integration` directory.

After generating, check your package name - by default it equals `@vsf-enterprise/<PAYMENT_TAG>-<ECOMMERCE_TAG>`. In terms of dependencies, the tool assumes eCommerce integration you are using is also from `@vsf-enterprise` scope. Updat names of packages if you need to. Organization option (?)
