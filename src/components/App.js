import React from 'react';
import Header from './header/Header';

class App extends React.Component {
    render() {
        return (
            <div className="o-panel">
                <Header />
                <div className="o-panel-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;