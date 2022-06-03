import { integrationPlugin } from '@vue-storefront/core';

export default integrationPlugin(({ integration }) => {
  integration.configure('<%= PAYMENT_TAG %>', { ...<<%# %>%= serialize(options) %<%# %>> });
});
