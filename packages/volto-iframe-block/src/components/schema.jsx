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
  Title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  Description: {
    id: 'Description',
    defaultMessage: 'Description',
  },
  Credit: {
    id: 'Credit',
    defaultMessage: 'Credit',
  },
  Width: {
    id: 'Width',
    defaultMessage: 'Width',
  },
  Height: {
    id: 'Height',
    defaultMessage: 'Height',
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
  TextHintPixels: {
    id: 'Values are in Pixels (e.g. 100 or 100px) or Percent (e.g. 100%)',
    defaultMessage:
      'Values are in Pixels (e.g. 100 or 100px) or Percent (e.g. 100%)',
  },
  PreserveAspectRatio: {
    id: 'Preserve aspect ratio',
    defaultMessage: 'Preserve aspect ratio',
  },
  PreserveAspectRatioHint: {
    id: 'Preserve aspect ratio based on initial width and height',
    defaultMessage: 'Preserve aspect ratio based on initial width and height',
  },
});

export const IframeBlockSchema = (props) => ({
  title: props.intl.formatMessage(messages.Iframe),
  block: 'Iframe',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'src',
        'title',
        'description',
        'credit',
        'width',
        'height',
        'preserveAspectRatio',
      ],
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
    description: {
      title: props.intl.formatMessage(messages.Description),
      widget: 'textarea',
    },
    credit: {
      title: 'Credit',
      widget: 'richtext',
    },
    width: {
      title: props.intl.formatMessage(messages.Width),
      widget: 'align',
      actions: ['center', 'wide', 'full'],
      default: 'wide',
    },
    height: {
      title: props.intl.formatMessage(messages.Height),
      widget: 'text',
      description: props.intl.formatMessage(messages.TextHintPixels),
    },
    preserveAspectRatio: {
      title: props.intl.formatMessage(messages.PreserveAspectRatio),
      description: props.intl.formatMessage(messages.PreserveAspectRatioHint),
      type: 'boolean',
      default: false,
    },
  },
  required: [],
});
