import React from 'react';
import './App.scss';
import Routes from './routes/Routes';
import './styles/_settings/_base.scss';

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};
