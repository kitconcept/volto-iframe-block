import React from 'react';
import cx from 'classnames';
import { isValidUrl } from './schema';

const IframeView = (props) => {
  const { className, data } = props;

  return (
    <div className={cx('block iframe align', data.align, className)}>
      {data.src && isValidUrl(data.src) && (
        <iframe src={data.src} title={data.title} />
      )}
    </div>
  );
};

export default IframeView;
