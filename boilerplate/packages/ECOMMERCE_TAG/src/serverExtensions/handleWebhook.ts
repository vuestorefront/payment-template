import { Logger } from '@vue-storefront/core';
import { Request, Response } from 'express';
import { LOGGER_PREFIX } from '../consts';
import { WebhookClient } from 'src/types';

const webhookHandler = () => {}; // TODO

const handleWebhook = (client: WebhookClient, config: any /** TODO */) => {
  return async (request: Request, response: Response) => {
    try {
      const webhookHandlerResult = await webhookHandler();
      return response.send(webhookHandlerResult);
    } catch (err) {
      Logger.error(LOGGER_PREFIX, err);
    }

    return response.send({});
  }
};

export default handleWebhook;
