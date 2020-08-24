import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';

const AuthorizeRoute: FC<RouteProps> = ({ children, ...rest }) => {
  // 检查是否登录
  return <Route {...rest} render={() => children}></Route>;
};

export default AuthorizeRoute;
