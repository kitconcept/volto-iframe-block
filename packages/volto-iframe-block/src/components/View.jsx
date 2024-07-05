import React from 'react';
import cx from 'classnames';
import { isValidUrl } from './schema';

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
      <center>
        {data.src && isValidUrl(data.src) && (
          <iframe
            src={data.src}
            title={data.title}
            width={width}
            height={data.height}
          />
        )}
      </center>
    </div>
  );
};

export default IframeView;
