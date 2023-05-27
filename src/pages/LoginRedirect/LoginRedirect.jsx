import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authenticateUserWithProviderAction } from '../../store/actions/currentUserActions';

const LoginRedirect = () => {
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      authenticateUserWithProviderAction(
        params.providerName,
        location.search,
        history
      )
    )
      .then(() => toast.success('Successful signin!'))
      .catch((err) => toast.error(err));
  }, [history, location.search, params.providerName, dispatch]);
  return <div style={{ textAlign: 'center' }}>Loading...</div>;
};

export default LoginRedirect;
