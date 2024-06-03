import React from 'react';

const IframeView = (props) => {
  const { data } = props;
  return (
    <div>
      <iframe
        src={data.src}
        title="iframe Example 1"
        width={data.width}
        height={data.height}
      ></iframe>
    </div>
  );
};

export default IframeView;
