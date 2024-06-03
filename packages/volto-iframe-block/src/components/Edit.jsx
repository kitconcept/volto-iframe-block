import React, { useState } from 'react';

import { defineMessages } from 'react-intl';
import { Icon, SidebarPortal } from '@plone/volto/components';
import clearSVG from '@plone/volto/icons/clear.svg';
import aheadSVG from '@plone/volto/icons/ahead.svg';
import applicationSVG from '@plone/volto/icons/application.svg';
import IframeView from './View';
import IframeSidebar from './Data';

const messages = defineMessages({
  InputPlaceholder: {
    id: 'Type a Iframe URL',
    defaultMessage: 'Type a Iframe URL',
  },
});

const IframeEdit = (props) => {
  const { data, intl } = props;
  const [url, setUrl] = useState('');

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
        <div>
          <center>
            <Icon name={applicationSVG} size="120px" />
            <div className="toolbar-inner">
              <input
                onKeyDown={onKeyDownVariantMenuForm}
                onChange={onChangeUrl}
                placeholder={intl.formatMessage(messages.InputPlaceholder)}
                value={url}
              />
              {url && (
                <div>
                  <button
                    className="cancel"
                    onClick={(e) => {
                      e.stopPropagation();
                      resetSubmitUrl();
                    }}
                  >
                    <Icon name={clearSVG} size="30px" />
                  </button>
                </div>
              )}
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSubmitUrl();
                  }}
                >
                  <Icon name={aheadSVG} size="30px" color="#007eb1" />
                </button>
              </div>
            </div>
          </center>
        </div>
      )}

      <SidebarPortal selected={props.selected}>
        <IframeSidebar {...props} />
      </SidebarPortal>
    </div>
  );
};

export default IframeEdit;
