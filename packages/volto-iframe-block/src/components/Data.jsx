import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import applicationSVG from '@plone/volto/icons/application.svg';
import trashSVG from '@plone/volto/icons/delete.svg';
import React from 'react';
import { defineMessages } from 'react-intl';

import { IframeBlockSchema } from '@kitconcept/volto-iframe-block/components/schema';

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
  const { intl, data, block, onChangeBlock, resetSubmitUrl } = props;
  const schema = IframeBlockSchema({ ...props, intl });

  const resetBlock = () => {
    onChangeBlock(block, {
      ...data,
      src: undefined,
      title: undefined,
      description: undefined,
      align: undefined,
      height: undefined,
      credit: undefined,
    });
    resetSubmitUrl();
  };

  return (
    <>
      {!data.src ? (
        <div className="sidebar-metadata-container" secondary>
          {intl.formatMessage(messages.NoIframe)}
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
          headerActions={
            <button type="button" onClick={resetBlock}>
              <Icon name={trashSVG} size="24px" color="red" />
            </button>
          }
        />
      )}
    </>
  );
};

export default IframeSidebar;
