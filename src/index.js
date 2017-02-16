// React
import React from 'react';
import { render } from 'react-dom';

// Components
import Login from './components/login/Login';
import App from './components/App';
import AccountsPage from './components/accounts/AccountsPage';
import Account from './components/account/Account';
import VirementCompteADebiter from './components/virement/VirementCompteADebiter';
import VirementCompteACrediter from './components/virement/VirementCompteACrediter';

// Rooter
//import { createHistory } from 'history';
//import { Router, Route, useRouterHistory } from 'react-router';
import { Router, Route, browserHistory } from 'react-router'

import './main.css';

/*const browserHistory = useRouterHistory(createHistory)({
    basename: '/poc/react'
});*/


function requireAuth(nextState, replace) {
	if (!sessionStorage.getItem('user')) {
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname }
		})
	}
}

const Root = () => {
	return (
		<Router history={browserHistory}>
			<Route path="/login" component={Login} />
			<Route path="/" component={App} onEnter={requireAuth}>
				<Route path="accounts" component={AccountsPage} />
				<Route path="accounts/:accountId" component={Account} />
				<Route path="virement/debiter" component={VirementCompteADebiter} />
				<Route path="virement/crediter/:accountIdADebiter" component={VirementCompteACrediter} />
			</Route>
			<Route path="*" component={Login} />
		</Router>
	)
}


render(
  <Root />,
  document.getElementById('root')
);