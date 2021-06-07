import { FC, memo } from 'react';
import './BasicLayout.less';

const BasicLayout: FC<any> = (props) => {
  return <div className="BasicLayout">{props.children}</div>;
};

export default memo(BasicLayout);
