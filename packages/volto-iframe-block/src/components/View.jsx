import cx from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { isValidUrl } from '@kitconcept/volto-iframe-block/helpers/isValidUrl';

const IframeView = (props) => {
  const { className, data, iframeRef, isEditMode } = props;
  const siteData = useSelector((state) => state.site?.data);
  const width =
    data.width === 'center'
      ? '620px'
      : data.width === 'wide'
        ? '940px'
        : data.width === 'full' && '1440px';

  return (
    <div className={cx('block iframe align', data.align, className)}>
      <div className="block-container">
        {data.src && isValidUrl(data.src, siteData) ? (
          <figure style={{ width: width, maxWidth: '100%' }}>
            <iframe
              ref={iframeRef}
              src={data.src}
              title={data.title}
              height={
                data.preserveAspectRatio &&
                data.calculatedAspectRatio &&
                !isEditMode
                  ? 'auto'
                  : data.height
              }
              style={
                data.preserveAspectRatio && data.calculatedAspectRatio
                  ? { aspectRatio: data.calculatedAspectRatio.toString() }
                  : {}
              }
            />
            <figcaption>
              {data.title && <div className="title">{data.title}</div>}
              {data.description && (
                <div className="description">{data.description}</div>
              )}
              {data.credit && (
                <div className="credit">
                  Credit:{' '}
                  <div dangerouslySetInnerHTML={{ __html: data.credit.data }} />
                </div>
              )}
            </figcaption>
          </figure>
        ) : (
          isEditMode && (
            <div className="invalid-url message">
              <FormattedMessage id="Invalid url" defaultMessage="Invalid url" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default IframeView;
