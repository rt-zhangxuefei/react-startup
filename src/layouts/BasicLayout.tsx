import { Layout } from 'antd';
import { LayoutProps } from 'antd/lib/layout';
import React, { FC, memo } from 'react';
import './BasicLayout.less';

const BasicLayout: FC<LayoutProps> = (props) => {
  return <Layout style={{ minHeight: '100vh' }}>{props.children}</Layout>;
};

export default memo(BasicLayout);
