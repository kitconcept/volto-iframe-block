import config from '@plone/volto/registry';
import { isEmpty } from 'lodash';

export function isValidUrl(url) {
  const patterns = config.blocks.blocksConfig.iframe.validUrls;

  if (isEmpty(patterns)) {
    return true;
  } else if (patterns.some((pattern) => pattern.includes(url))) {
    return true;
  } else {
    return false;
  }
}
