// React
import React from 'react';
import { render } from 'react-dom';

// Components
import NotFound from './components/error/NotFound';
import Login from './components/login/Login';
import App from './components/App';
import Accounts from './components/accounts/Accounts';
import Account from './components/account/Account';

// Rooter
import { Router, Route, browserHistory } from 'react-router';

import './main.css';

const Root = () => {
	return (
		<Router history={browserHistory}>
			<Route path="/login" component={Login} />
			<Route path="/" component={App}>
				<Route path="accounts" component={Accounts} />
				<Route path="accounts/:accountId" component={Account} />
			</Route>
			<Route path="*" component={NotFound} />
		</Router>
	)
}

render(
  <Root />,
  document.getElementById('root')
);