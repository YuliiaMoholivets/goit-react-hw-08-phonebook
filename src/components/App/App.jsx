
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/operation';  
import { getError} from 'redux/contacts/selector';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader'; 
import { AppBar } from 'components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { selectIsRefreshing } from 'redux/auth/selectors';
// import { selectUserName } from 'redux/auth/selectors';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const Page404 = lazy(() => import('pages/Page404'));

export function App() {
  const error = useSelector(getError);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const user = useSelector(selectUserName);
  
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

 useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
 }, [error]);
  
  
  return (
    <>
      <AppBar />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
  
};

