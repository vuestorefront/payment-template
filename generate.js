const { getFlagValue } = require('./helpers');
const fse = require('fs-extra');
const fs = require('fs');
const { execSync } = require('child_process');

const logGreen = (message) => console.log("\x1b[32m%s\x1b[0m", message);
const logRed = (message) => console.log("\x1b[31m%s\x1b[0m", message);

const getFlagAndVerify = (flag, exampleValues, defaultValue) => {
  const flagsValue = getFlagValue(flag);

  if (!flagsValue || !flagsValue.trim() || flagsValue.startsWith('--')) {
    if (defaultValue !== undefined) {
      return defaultValue
    }
    logRed(`Value of required ${flag} flag not provided! Example values: ${exampleValues}.`);
    throw new Error();
  }
  return flagsValue;
}

(() => {
  // yarn generate --ecommerce:tag elasticpath --ecommerce:capitalizedTag Elasticpath --ecommerce:name ElasticPath --author:name Fifciu --payment:tag stripe --payment:name Stripe --payment:capitalizedTag Stripe --payment:logoSrc https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png
  try {
    const ecommerceTag = getFlagAndVerify('--ecommerce:tag', 'ct, commercetools, elasticpath');
    const ecommerceName = getFlagAndVerify('--ecommerce:name', 'commercetools, ElasticPath, Magento2');
    const ecommerceCapitalizedTag = getFlagAndVerify('--ecommerce:capitalizedTag', 'Elasticpath');
    const authorName = getFlagAndVerify('--author:name', '<your_github_name>');
    const paymentTag = getFlagAndVerify('--payment:tag', 'paypal, mollie, checkoutcom, cko');
    const paymentName = getFlagAndVerify('--payment:name', 'PayPal, Mollie, Checkout.com');
    const paymentCapitalizedTag = getFlagAndVerify('--payment:capitalizedTag', 'Paypal, Mollie, CheckoutCom');
    const paymentLogoSrc = getFlagAndVerify('--payment:logoSrc', '<url_to_the_image>');
    const miscEnterprise = Boolean(getFlagAndVerify('--misc:enterprise', 'true, false', false));
    const projectDirectory = `temp-${paymentTag}-${ecommerceTag}-integration`;
    
    try {
      fse.copySync('boilerplate', projectDirectory);
      logGreen(`Boilerplate succesfully copied to the "${projectDirectory}" directory.`);
    } catch (err) {
      logRed(`Error durring copying boilerplate to the "${projectDirectory}" directory:`);
      console.error(err);
      return;
    }

    
    try {
      const packagePath = `${projectDirectory}/packages/ECOMMERCE_TAG`;
      fs.renameSync(packagePath, packagePath.replace('ECOMMERCE_TAG', ecommerceTag));

      const docsDockerPath = `${projectDirectory}/.vuestorefrontcloud/docker/docs-ECOMMERCE_TAG`;
      fs.renameSync(docsDockerPath, docsDockerPath.replace('ECOMMERCE_TAG', ecommerceTag));

      const docsWorkflowPath = `${projectDirectory}/.github/workflows/docs-PAYMENT_TAG-deployment.yaml`;
      fs.renameSync(docsWorkflowPath, docsWorkflowPath.replace('PAYMENT_TAG', paymentTag));

      const vueComponentPath = `${projectDirectory}/packages/${ecommerceTag}/src/components/PaymentPAYMENT_CAPITALIZED_TAGProvider.vue`;
      fs.renameSync(vueComponentPath, vueComponentPath.replace('PAYMENT_CAPITALIZED_TAG', paymentCapitalizedTag));

      const composablePath = `${projectDirectory}/packages/${ecommerceTag}/src/composables/usePAYMENT_CAPITALIZED_TAG`;
      fs.renameSync(composablePath, composablePath.replace('PAYMENT_CAPITALIZED_TAG', paymentCapitalizedTag));


      logGreen(`Succesfully renamed files and directories in copied boilerplate.`);
    } catch(err) {
      logRed(`Error durring renaming:`);
      console.log(err);
      return;
    }

    const finalProjectDirectory = projectDirectory.replace('temp-', '');
    const tuConfigName = `${paymentTag}-${ecommerceTag}-integration.config.js`;
    try {
      fs.writeFileSync(tuConfigName, `module.exports = {
          copy: {
            parseAllExtensions: true,
            to: '${finalProjectDirectory}',
            from: [
              {
                path: '${projectDirectory}',
                ignore: [],
                variables: {
                  AUTHOR_NAME: '${authorName}',
                  ECOMMERCE_TAG: '${ecommerceTag}',
                  ECOMMERCE_NAME: '${ecommerceName}',
                  ECOMMERCE_CAPITALIZED_TAG: '${ecommerceCapitalizedTag}',
                  PAYMENT_TAG: '${paymentTag}',
                  PAYMENT_NAME: '${paymentName}',
                  PAYMENT_CAPITALIZED_TAG: '${paymentCapitalizedTag}',
                  PAYMENT_LOGO_SRC: '${paymentLogoSrc}',
                  MISC_ENTERPRISE: ${miscEnterprise}
                },
                watch: false,
              },
            ]
          }
        }`);

      execSync(`yarn vsf-tu --config ${tuConfigName}`, { stdio: 'inherit' });
      fs.rmSync(projectDirectory, { recursive: true, force: true });
      fs.rmSync(tuConfigName, { force: true });

    } catch (err) {
      logRed(`Error durring compiling templates:`);
      console.log(err);
      return;
    }

    if (!miscEnterprise) {
      try {
        fs.rmSync(`${finalProjectDirectory}/.npmrc`, { force: true });
        fs.rmSync(`${finalProjectDirectory}/packages/${ecommerceTag}/License.md`, { force: true });
  
      } catch (err) {
        logRed(`Error durring removing enterprise parts:`);
        console.log(err);
        return;
      }
    } else {
      logRed(`Provide ID Code for Google Analytics in "GTM_TAG" const inside "${finalProjectDirectory}/packages/${ecommerceTag}/docs/src/.vuepress/config.js" file.`);
    }

    logGreen(`Project succesfully generated in "${finalProjectDirectory}" directory.`);
  } catch (err) {
    if (err.message) {
      console.log(err);
    }
    return;
  }

})();
