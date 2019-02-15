// import React, { Component } from 'react';
// import Dashboard from './components/Dashboard/Dashboard'
// import Form from './components/Form/Form'
// import Header from './components/Header/Header'
// import Product from './components/Dashboard/Product/Product'
// import './App.css';
// import axios from 'axios';
// import { pathToFileURL } from 'url';

import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header/>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;




