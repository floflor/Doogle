import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Landing from './components/landing/landing';
import MainPage from './components/mainPage/mainPage';
import Create from './components/create/create';
import NavBar from './components/navBar/navBar';
import Detail from './components/detail/detail';
import Random from './components/random/random';
import { Provider } from 'react-redux';
import Error from './components/notfound/notfound';
import store from './store/store';

function App() {
  return (

    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Landing} />
            <>
              <NavBar />
              <Route path='/home' component={Random} />
              <Route path='/search' component={MainPage} />
              <Route path='/create' component={Create} />
              <Route path='/detail/:id' component={Detail} />
            </>
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
