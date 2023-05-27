import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT ?? 5000,
});

api.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (!err.response) {
      toast.error('Server error');
    }
    return Promise.reject(
      err.response?.data?.message[0]?.messages[0]?.message ??
        'Something went wrong...'
    );
  }
);

export const registerUser = (user) => api.post('/auth/local/register', user);

export const authenticateUser = (user) => api.post('/auth/local/', user);

export const authenticateUserWithProvider = (provider, searchParams) =>
  api.get(`/auth/${provider}/callback/${searchParams}`);

export const getCoupons = () =>
  api.get('/coupons').then((c) =>
    c.map(({ id, title, description, buttonText, gradientColors }) => ({
      id,
      title,
      description,
      buttonText,
      gradientColors,
    }))
  );

export const getCategories = () => api.get('/categories');
