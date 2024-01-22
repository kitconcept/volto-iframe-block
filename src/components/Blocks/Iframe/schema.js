import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Iframe: {
    id: 'Iframe',
    defaultMessage: 'Iframe',
  },
  Source: {
    id: 'Source',
    defaultMessage: 'Source',
  },
  Height: {
    id: 'Height',
    defaultMessage: 'Height',
  },
  Width: {
    id: 'Width',
    defaultMessage: 'Width',
  },
});

export const IframeBlockSchema = (props) => ({
  title: props.intl.formatMessage(messages.Iframe),
  block: 'Iframe',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['src', 'width', 'height'],
    },
  ],

  properties: {
    src: {
      title: props.intl.formatMessage(messages.Source),
      widget: 'url',
    },
    width: {
      title: props.intl.formatMessage(messages.Width),
    },
    height: {
      title: props.intl.formatMessage(messages.Height),
    },
  },
  required: [],
});
