import { Logger } from '@vue-storefront/core';
import { LOGGER_PREFIX } from '../../consts';
import { <%= PAYMENT_CAPITALIZED_TAG %>IntegrationContext } from '../../types';

const exampleEndpoint = async (
  context: <%= PAYMENT_CAPITALIZED_TAG %>IntegrationContext, 
  params: TODO
): Promise<TODO> => {
  try {
    return Promise.resolve({});
  } catch (err) {
    Logger.error(`${LOGGER_PREFIX} ${err.message}`);
    throw err;
  }
};

export default exampleEndpoint;
