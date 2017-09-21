import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/Layout';
// import Apple from './components/Apple';
// import Microsoft from './components/Microsoft';
// import Google from './components/Google';
// import About from './components/About';
// import Contact from './components/Contact';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <App>
        <Switch>
        </Switch>
      </App>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
