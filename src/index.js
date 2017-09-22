import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; 

import BaseLayout from './components/Layout';
import Apple from './components/Apple';
import Microsoft from './components/Microsoft';
import Google from './components/Google';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <App>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/google' component={Google}/>
          <Route path='/microsoft'
          component={Microsoft}/>
          <Route path='/apple'
          component={Apple}/>
        </Switch>
      </App>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
