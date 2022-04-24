import { SmileOutlined } from '@ant-design/icons';

const defaultProps = {
  route: {
    path: '/',
    routes: [
      {
        path: '/counter',
        name: 'CounterDemo',
        icon: <SmileOutlined />,
      },
    ],
  },
};

export default defaultProps;
