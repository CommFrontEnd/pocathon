import React from 'react';

// Components

import Account from './account/Account';

class App extends React.Component {
    render() {
        return (
            <div className="o-panel">
                
                <div className="o-panel-content">
                    <Account />
                </div>
            </div>
        )
    }
}

export default App;