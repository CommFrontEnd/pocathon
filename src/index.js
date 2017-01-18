// React
import React from 'react';
import { render } from 'react-dom';

// Components
// import App from './components/App';
import Login from './components/login/Login';
import NotFound from './components/error/NotFound';

// Rooter
import { Router, Route, browserHistory } from 'react-router';

import './main.css';

const Root = () => {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={Login} />
			<Route path="*" component={NotFound} />
		</Router>
	)
}

render(
  <Root />,
  document.getElementById('root')
);