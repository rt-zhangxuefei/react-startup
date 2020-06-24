import React, { memo } from 'react';
import ProLayout from '@ant-design/pro-layout';
import styles from './Layout.less';

function Layout(props) {
  return (
    <ProLayout title="React Startup" className={styles.Layout}>
      {props.children}
    </ProLayout>
  );
}

export default memo(Layout);
