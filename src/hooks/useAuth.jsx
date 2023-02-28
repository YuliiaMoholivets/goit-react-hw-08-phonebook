import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const UseAuth = (Component, navigateTo) => {

  const ProtectedComponent = props => {
      const isLoggedIn = useSelector(selectIsLoggedIn);
      const isRefreshing = useSelector(selectIsRefreshing);

    return isLoggedIn && !isRefreshing ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectedComponent;
}

export default UseAuth;

