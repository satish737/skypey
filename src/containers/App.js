import React from 'react';
import './App.css';
import Sidebar from '../components/sidebar';
import Main from '../components/Main'
import store from '../store';
const _ = require("lodash");

const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};
export default App;
