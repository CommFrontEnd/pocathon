import React from 'react';
import Header from './header/Header';

class App extends React.Component {
    render() {
        return (
            <div className="o-panel">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default App;