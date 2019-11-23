import React, { memo } from 'react';
import './Layout.less';

function Layout(props) {
  return (
    <div className="layout">
      <div className="layout-header">Header</div>
      <div className="layout-content">{props.children}</div>
    </div>
  );
}

export default memo(Layout);
