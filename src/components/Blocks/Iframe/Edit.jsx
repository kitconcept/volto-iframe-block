import React, { useState } from 'react';
import { Button, Input, Message } from 'semantic-ui-react';

import { defineMessages, useIntl } from 'react-intl';
import { Icon, SidebarPortal } from '@plone/volto/components';
import clearSVG from '@plone/volto/icons/clear.svg';
import aheadSVG from '@plone/volto/icons/ahead.svg';
import videoBlockSVG from '@plone/volto/components/manage/Blocks/Video/block-video.svg';
import IframeView from './View';
import IframeSidebar from './IframeSidebar';

const messages = defineMessages({
  IframeBlockInputPlaceholder: {
    id: 'Type a Iframe URL',
    defaultMessage: 'Type a Iframe URL',
  },
});

const IframeEdit = (props) => {
  const [url, setUrl] = useState('');
  const intl = useIntl();
  const placeholder = intl.formatMessage(messages.IframeBlockInputPlaceholder);

  const { data } = props;

  const onChangeUrl = ({ target }) => {
    setUrl(target.value);
  };

  const resetSubmitUrl = () => {
    setUrl('');
  };

  const onSubmitUrl = () => {
    props.onChangeBlock(props.block, {
      ...props.data,
      src: url,
    });
  };

  const onKeyDownVariantMenuForm = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onSubmitUrl();
    }
  };

  return (
    <div>
      {data.src ? (
        <IframeView {...props} />
      ) : (
        <Message>
          <center>
            <img src={videoBlockSVG} alt="" />
            <div className="toolbar-inner">
              <Input
                onKeyDown={onKeyDownVariantMenuForm}
                onChange={onChangeUrl}
                placeholder={placeholder}
                value={url}
              />
              {url && (
                <Button.Group>
                  <Button
                    basic
                    className="cancel"
                    onClick={(e) => {
                      e.stopPropagation();
                      resetSubmitUrl();
                    }}
                  >
                    <Icon name={clearSVG} size="30px" />
                  </Button>
                </Button.Group>
              )}
              <Button.Group>
                <Button
                  basic
                  primary
                  onClick={(e) => {
                    e.stopPropagation();
                    onSubmitUrl();
                  }}
                >
                  <Icon name={aheadSVG} size="30px" />
                </Button>
              </Button.Group>
            </div>
          </center>
        </Message>
      )}

      <SidebarPortal selected={props.selected}>
        <IframeSidebar {...props} />
      </SidebarPortal>
    </div>
  );
};

export default IframeEdit;
