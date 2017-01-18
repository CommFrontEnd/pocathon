import React from 'react';
import Header from './header/Header';

// Components

import Account from './account/Account';

class App extends React.Component {
    render() {
        return (
            <div className="o-panel">
                <Header />
                <div className="o-panel-content">
                    <Account />
                </div>
            </div>
        )
    }
}

export default App;