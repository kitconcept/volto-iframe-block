import React from 'react';
import { BlockDataForm, Icon } from '@plone/volto/components';
import { Segment } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import videoSVG from '@plone/volto/icons/videocamera.svg';
import { IframeBlockSchema } from './schema';

const messages = defineMessages({
  Iframe: {
    id: 'Iframe',
    defaultMessage: 'Iframe',
  },
  NoIframe: {
    id: 'No Iframe source selected',
    defaultMessage: 'No Iframe source selected',
  },
});

const IframeSidebar = (props) => {
  const { data, block, onChangeBlock } = props;
  const intl = useIntl();
  const schema = IframeBlockSchema({ ...props, intl });

  return (
    <>
      {!data.src ? (
        <Segment className="sidebar-metadata-container" secondary>
          {props.intl.formatMessage(messages.NoIframe)}
          <Icon name={videoSVG} size="100px" color="#b8c6c8" />
        </Segment>
      ) : (
        <BlockDataForm
          schema={schema}
          title={intl.formatMessage(messages.Iframe)}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          onChangeBlock={onChangeBlock}
          formData={data}
          block={block}
        />
      )}
    </>
  );
};

export default IframeSidebar;
