import cx from 'classnames';
import React from 'react';

import { isValidUrl } from '@kitconcept/volto-iframe-block/helpers/isValidUrl';

const IframeView = (props) => {
  const { className, data } = props;
  const width =
    data.width === 'center'
      ? '620px'
      : data.width === 'wide'
        ? '940px'
        : data.width === 'full' && '1440px';

  return (
    <div className={cx('block iframe align', data.align, className)}>
      <div className="block-container">
        {data.src && isValidUrl(data.src) && (
          <figure style={{ width: width }}>
            <iframe src={data.src} title={data.title} height={data.height} />
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
        )}
      </div>
    </div>
  );
};

export default IframeView;
