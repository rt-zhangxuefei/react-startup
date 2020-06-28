import React, { memo } from 'react';
import ProLayout from '@ant-design/pro-layout';
import styles from './Layout.less';

function Layout(props) {
  return (
    <ProLayout className={styles.Layout} title="React Startup">
      {props.children}
    </ProLayout>
  );
}

export default memo(Layout);
