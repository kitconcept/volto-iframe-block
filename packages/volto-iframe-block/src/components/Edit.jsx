import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import Toast from '@plone/volto/components/manage/Toast/Toast';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import aheadSVG from '@plone/volto/icons/ahead.svg';
import applicationSVG from '@plone/volto/icons/application.svg';
import clearSVG from '@plone/volto/icons/clear.svg';
import React, { useState } from 'react';
import { defineMessages } from 'react-intl';
import { toast } from 'react-toastify';

import { isValidUrl } from '@kitconcept/volto-iframe-block/helpers/isValidUrl';
import IframeSidebar from '@kitconcept/volto-iframe-block/components/Data';
import IframeView from '@kitconcept/volto-iframe-block/components/View';

const messages = defineMessages({
  InputPlaceholder: {
    id: 'Type a Iframe URL',
    defaultMessage: 'Type a Iframe URL',
  },
  IncorrectUrl: {
    id: 'Invalid url',
    defaultMessage: 'Invalid url',
  },
  Error: {
    id: 'Error',
    defaultMessage: 'Error',
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
    if (isValidUrl(url)) {
      props.onChangeBlock(props.block, {
        ...props.data,
        src: url,
      });
      return;
    }

    toast.error(
      <Toast
        error
        title={intl.formatMessage(messages.Error)}
        content={intl.formatMessage(messages.IncorrectUrl)}
      />,
    );
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
              <div>
                {url && (
                  <div>
                    <button
                      type="button"
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
                    type="button"
                    disabled={!url}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSubmitUrl();
                    }}
                  >
                    <Icon
                      name={aheadSVG}
                      size="30px"
                      color={!url ? '#007fb1b3' : '#007eb1'}
                    />
                  </button>
                </div>
              </div>
            </div>
          </center>
        </div>
      )}

      <SidebarPortal selected={props.selected}>
        <IframeSidebar {...props} resetSubmitUrl={resetSubmitUrl} />
      </SidebarPortal>
    </div>
  );
};

export default IframeEdit;
