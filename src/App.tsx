import React from 'react';
import './App.scss';
import Sidebar from './components/Nav/Sidebar';
import Topbar from './components/Nav/Topbar';
import './styles/_settings/_base.scss'
import MarvelLogo from './assets/marvel_logo.png'

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className='App__logo'>
        <img src={MarvelLogo} alt='marvel_logo' width='50px' />
      </div>
      <div className='App__topbar'>
        <Topbar />
      </div>
      <div className='App__sidebar'>
        <Sidebar />
      </div>
      <div className='App__content'>
        Content
      </div>
    </div>
  );
};
