import { Request, Response } from 'express';

export type <%= ECOMMERCE_CAPITALIZED_TAG %>Client = any; // TODO
export type <%= PAYMENT_CAPITALIZED_TAG %>Client = any; // TODO

export interface <%= PAYMENT_CAPITALIZED_TAG %>IntegrationContext {
  config: <%= PAYMENT_CAPITALIZED_TAG %>ServerConfig,
  client: {
    <%= ECOMMERCE_TAG %>: <%= ECOMMERCE_CAPITALIZED_TAG %>Client,
    <%= PAYMENT_TAG %>: <%= PAYMENT_CAPITALIZED_TAG %>Client
  },
  req: Request,
  res: Response
};

export interface ApiClientRequestParams {
  uri: string,
  method?: string,
  body?: any,
  headers?: Record<string, string>
};

export interface VSFContext {
  $<%= ECOMMERCE_TAG %>: {
    config: any
  },
  $<%= PAYMENT_TAG %>: {
    config: <%= PAYMENT_CAPITALIZED_TAG %>ClientConfig,
    api: ApiEndpoints
  }
};

export type ApiEndpoints = any; // TODO

export type <%= PAYMENT_CAPITALIZED_TAG %>ClientConfig = any; // TODO

export type <%= PAYMENT_CAPITALIZED_TAG %>ServerConfig = any; // TODO: middleware.config.js

export type WebhookClient = any; // TODO
