import React from 'react';
import { BlockDataForm, Icon } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import applicationSVG from '@plone/volto/icons/application.svg';
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
        <div className="sidebar-metadata-container" secondary>
          {props.intl.formatMessage(messages.NoIframe)}
          <Icon name={applicationSVG} size="100px" color="#b8c6c8" />
        </div>
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
