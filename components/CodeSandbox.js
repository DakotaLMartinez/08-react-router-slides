import React from 'react';

function CodeSandbox({ height, url }) {
  height ||= '800px';
  return (
    <iframe
      src={url}
      style={{
        width:"100%",
        height: height,
        border: 0,
        borderRadius: "4px",
        overflow: "hidden"
      }}
      title="import-export-example"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}

export default CodeSandbox;
