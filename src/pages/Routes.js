import React from 'react';
import { Switch, Route } from 'react-router';
import LoginRedirect from './LoginRedirect/LoginRedirect';
import HomePage from './HomePage/HomePage';
import ProductPage from './ProductPage/ProductPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path='/auth/:providerName/callback'
        component={LoginRedirect}
      />
      <Route path='/' exact component={HomePage} />
      <Route path='/product' component={ProductPage} />
      <Route path='/checkout' component={CheckoutPage} />
    </Switch>
  );
};

export default Routes;
