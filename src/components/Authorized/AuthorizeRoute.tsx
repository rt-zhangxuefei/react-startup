import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';

const AuthorizeRoute: FC<RouteProps> = ({
  children,
  // noMath = <Result status="403" title="403" subTitle="抱歉，您没有权限访问当前页面"></Result>,
  ...rest
}) => {
  // 检查是否登录

  return <Route {...rest} render={() => children}></Route>;
};

export default AuthorizeRoute;
