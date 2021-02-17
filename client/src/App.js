import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import MainPage from './components/mainPage/mainPage';
import { Provider } from 'react-redux';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={MainPage}/>


        </div>
      </Router>
    </Provider>
  );
}

export default App;
