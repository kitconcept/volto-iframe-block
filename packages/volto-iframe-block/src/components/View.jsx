import React from 'react';
import cx from 'classnames';

const IframeView = (props) => {
  const { className, data } = props;

  return (
    <div className={cx('block iframe align', data.align, className)}>
      <iframe src={data.src} title={data.title} />
    </div>
  );
};

export default IframeView;
