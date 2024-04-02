import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import LoginScreen from './LoginScreen';
import CadastroScreen from './CadastroScreen';
import HomeScreen from './HomeScreen';

const Router = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/cadastro" component={CadastroScreen} />
      <Route path="/home" component={HomeScreen} />
    </NativeRouter>
  );
};

export default Router;