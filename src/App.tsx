import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { LoginPage } from 'pages/LoginPage/LoginPage';
import { SignupPage } from 'pages/SignupPage/SignupPage';
import { ProfilePage } from 'pages/ProfilePage/ProfilePage';
import { MapPage } from 'pages/MapPage/MapPage';

import { CustomRoute } from 'components/CustomRoute/CustomRoute';
import { HeaderContainer } from 'containers/HeaderContainer';

import './App.module.scss';

interface IAppProps {
  isAuth: boolean;
}

export const App: React.FC<IAppProps> = props => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Redirect exact from="/" to="/map" />
        <CustomRoute path="/map" to="/login" isAuth={props.isAuth} component={MapPage} />
        <CustomRoute path="/profile" to="/login" isAuth={props.isAuth} component={ProfilePage} />
        <CustomRoute path="/login" to="/profile" isAuth={!props.isAuth} component={LoginPage} />
        <CustomRoute path="/signup" to="/profile" isAuth={!props.isAuth} component={SignupPage} />
      </Switch>
    </>
  );
};
