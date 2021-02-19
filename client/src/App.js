import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/landing/landing';
import MainPage from './components/mainPage/mainPage';
import Create from './components/create/create';
import About from './components/about/about';
import { Provider } from 'react-redux';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={MainPage}/>
          <Route path='/create' component={Create}/>
          <Route path='/about' component={About}/>  
        </div>
      </Router>
    </Provider>
  );
}

export default App;
