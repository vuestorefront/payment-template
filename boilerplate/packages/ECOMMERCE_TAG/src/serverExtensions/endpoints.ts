import handleWebhook from './handleWebhook';
import { Express } from 'express';
import { API_WEBHOOK_ENDPOINT } from '../consts';
import { 
  buildApiClient, // TODO: Creates <%= ECOMMERCE_TAG %> API client
  buildPaymentApiClient // TODO: Creates <%= PAYMENT_TAG %> API client
} from '../api/_utils';

export const endpointsExtension = {
  name: 'endpointsExtension',

  extendApp: (ctx: { app: Express, configuration: any }) => {
    const config = ctx.configuration;

    ctx.app.post(`/<%= PAYMENT_TAG %>/${API_WEBHOOK_ENDPOINT}`, handleWebhook({
      // Client might be different in your specific case
      <%= ECOMMERCE_TAG %>: buildApiClient(config),
      <%= PAYMENT_TAG %>: buildPaymentApiClient(config)
    }, config));
  }
};
