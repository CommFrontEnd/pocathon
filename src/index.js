// React
import React from 'react';
import { render } from 'react-dom';

// Components
// import App from './components/App';
import Connexion from './components/login/Login';

// Rooter
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Connexion} />
			</div>
		</BrowserRouter>
	)
}

render(
  <Root />,
  document.getElementById('root')
);