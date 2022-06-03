/* istanbul ignore file */
import { apiClientFactory } from '@vue-storefront/core';

import * as api from './api';
import { 
  buildApiClient, // TODO: Creates <%= ECOMMERCE_TAG %> API client
  buildPaymentApiClient // TODO: Creates <%= PAYMENT_TAG %> API client
} from './api/_utils';
import { <%= PAYMENT_CAPITALIZED_TAG %>ServerConfig } from './types';
import { endpointsExtension } from './serverExtensions/endpoints';

const { createApiClient } = apiClientFactory<<%= PAYMENT_CAPITALIZED_TAG %>ServerConfig, typeof api>({
  onCreate: (config: <%= PAYMENT_CAPITALIZED_TAG %>ServerConfig) => {
    return {
      config,
      client: { // Client might be different in your specific case
        <%= ECOMMERCE_TAG %>: buildApiClient(config),
        <%= PAYMENT_TAG %>: buildPaymentApiClient(config)
      }
    }
  },
  extensions: [
    endpointsExtension
  ],
  api
});

export {
  createApiClient
};
