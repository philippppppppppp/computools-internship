import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import ModalSystem from './components/ModalSystem/ModalSystem';
import Routes from './pages/Routes';
import { getCouponsAction } from './store/actions/couponsActions';
import { useDispatch } from 'react-redux';
import { getCategoriesAction } from './store/actions/categoriesActions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCouponsAction());
    dispatch(getCategoriesAction());
  }, [dispatch]);
  return (
    <div className='App'>
      <Header />
      <ModalSystem />
      <Routes />
      <ToastContainer />
    </div>
  );
};

export default App;
