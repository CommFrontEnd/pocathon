import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import Login from 'component/login/Login';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Login} />
            </div>
        </BrowserRouter>
    )
}

render(
    <Root />, document.getElementById('app')
)