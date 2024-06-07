import config from '@plone/volto/registry';
import { defineMessages } from 'react-intl';
import { isEmpty } from 'lodash';

const messages = defineMessages({
  Iframe: {
    id: 'Iframe',
    defaultMessage: 'Iframe',
  },
  Source: {
    id: 'Source',
    defaultMessage: 'Source',
  },
  Title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  Align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  TitleTextHint: {
    id: 'Provide an iFrame title for better accessibility for screenreaders (title will not be visible),',
    defaultMessage:
      'Provide an iFrame title for better accessibility for screenreaders (title will not be visible),',
  },
  TitleLinkTextHint: {
    id: 'see WCAG 2.1',
    defaultMessage: 'see WCAG 2.1',
  },
  openLinkInNewTab: {
    id: 'Open in a new tab',
    defaultMessage: 'Open in a new tab',
  },
});

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

export const IframeBlockSchema = (props) => ({
  title: props.intl.formatMessage(messages.Iframe),
  block: 'Iframe',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['src', 'title', 'align'],
    },
  ],

  properties: {
    src: {
      title: props.intl.formatMessage(messages.Source),
      widget: 'url',
    },
    title: {
      title: props.intl.formatMessage(messages.Title),
      widget: 'text',
      description: (
        <>
          {props.intl.formatMessage(messages.TitleTextHint)}{' '}
          <a
            href="https://www.w3.org/WAI/WCAG21/Techniques/html/H64"
            title={props.intl.formatMessage(messages.openLinkInNewTab)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.intl.formatMessage(messages.TitleLinkTextHint)}
          </a>{' '}
        </>
      ),
    },
    align: {
      title: props.intl.formatMessage(messages.Align),
      widget: 'align',
      actions: ['center', 'wide', 'full'],
    },
  },
  required: [],
});
