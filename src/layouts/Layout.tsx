import { ReadOutlined } from '@ant-design/icons';
import ProLayout from '@ant-design/pro-layout';
import { LayoutProps } from 'antd/lib/layout';
import React, { FC, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.less';

const appRoute = {
  routes: [
    {
      name: 'Welcome',
      path: '/',
      icon: <ReadOutlined></ReadOutlined>,
    },
  ],
};

const Layout: FC<LayoutProps> = (props) => {
  const location = useLocation();
  const menuItemRender = (menuItemProps: any, defaultDom: any) => {
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  };

  return (
    <ProLayout
      location={{ pathname: location.pathname }}
      route={appRoute}
      menuItemRender={menuItemRender}
      title={process.env.REACT_APP_TITLE}
      disableMobile={false}
      className="Layout"
      fixSiderbar
      fixedHeader
      pageTitleRender={false}
      siderWidth={256}
    >
      {props.children}
    </ProLayout>
  );
};

export default memo(Layout);
