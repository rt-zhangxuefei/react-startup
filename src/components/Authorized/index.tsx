import { Navigate, useLocation } from 'react-router-dom';

function Authorized(props) {
  const location = useLocation();
  // 校验权限
  const authorized = false;
  if (!authorized) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return props.children;
}

export default Authorized;
