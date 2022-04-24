import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import defaultProps from './defaultProps';
import './Layout.less';

const Layout = () => {
  return (
    <div className="Layout">
      <ProLayout
        {...defaultProps}
        menuItemRender={(item, dom) => <Link to={item.path}>{dom}</Link>}
      >
        <PageContainer content={<Outlet />}></PageContainer>
      </ProLayout>
    </div>
  );
};

export default Layout;
