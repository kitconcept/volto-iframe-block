import config from '@plone/volto/registry';
import { isEmpty } from 'lodash';
import { defineMessages } from 'react-intl';

/**
 * Error messages for displaying toast notifications when an invalid URL
 * is submitted.
 */
export const toastError = defineMessages({
  Title: {
    id: 'Error',
    defaultMessage: 'Error',
  },
  Content: {
    id: 'Invalid url',
    defaultMessage: 'Invalid url',
  },
});

export function isValidUrl(url, siteData) {
  const patterns = config.blocks.blocksConfig.iframe.validUrls;

  if (isEmpty(patterns)) {
    return true;
  } else if (patterns.some((pattern) => pattern.includes(url))) {
    return true;
  } else {
    return false;
  }
}
