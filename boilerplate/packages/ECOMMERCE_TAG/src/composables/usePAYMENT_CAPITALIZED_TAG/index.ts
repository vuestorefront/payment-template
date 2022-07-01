import { useVSFContext, sharedRef, Logger } from '@vue-storefront/core';
import { VSFContext } from '../../types';
import { useCart } from '@vsf-enterprise/<%= ECOMMERCE_TAG %>';
import { computed } from '@nuxtjs/composition-api';
import { LOGGER_PREFIX } from '../../consts';

interface Use<%= PAYMENT_CAPITALIZED_TAG %>Errors {
  exampleEndpoint: Error
};

const use<%= PAYMENT_CAPITALIZED_TAG %> = () => {
  const error = sharedRef<Use<%= PAYMENT_CAPITALIZED_TAG %>Errors>({
    exampleEndpoint: null
  }, 'use<%= PAYMENT_CAPITALIZED_TAG %>-error');
  const loading = sharedRef(false, 'use<%= PAYMENT_CAPITALIZED_TAG %>-loading');
  const paymentObject = sharedRef(null, 'use<%= PAYMENT_CAPITALIZED_TAG %>-paymentObject');

  const { $<%= PAYMENT_TAG %>: { api }} = useVSFContext() as VSFContext;
  const { load: loadCart } = useCart();

  const exampleEndpoint = async (/** TODO */): Promise<any> => {
    try {
      error.value.exampleEndpoint = null;
      loading.value = true;

      await loadCart();
      const response = await api.SOME_METHOD();
      paymentObject.value = response;
    } catch (err) {
      Logger.error(`${LOGGER_PREFIX} ${err.message}`)
      error.value.exampleEndpoint = _getError(err);
    } finally {
      loading.value = false;
    }
  };

  const setPaymentObject = (newPaymentObject: string) => {
    paymentObject.value = newPaymentObject;
  };

  return {
    error: computed<Use<%= PAYMENT_CAPITALIZED_TAG %>Errors>(() => error.value),
    loading: computed<boolean>(() => loading.value),
    paymentObject: computed<any>(() => paymentObject.value),

    exampleEndpoint,
    setPaymentObject
  };
};

export default use<%= PAYMENT_CAPITALIZED_TAG %>;

const _getError = (err) => err.response || err.data || err;
