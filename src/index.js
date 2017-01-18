// React
import React from 'react';
import { render } from 'react-dom';

// Components
// import App from './components/App';
import Login from './components/login/Login';
import NotFound from './components/error/NotFound';

// Rooter
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Login} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(
  <Root />,
  document.getElementById('root')
);