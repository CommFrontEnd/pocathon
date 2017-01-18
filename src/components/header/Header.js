import React from 'react';
import Menu from './Menu';
class Header extends React.Component {

    render() {
        var useTag = '<use xlink:href="#logo-min" />';
        return (
            <div className="o-panel-header">
                <h1 className="c-logo">
                    <svg height="2em" viewBox="0 0 20 20" preserveAspectRatio="xMinYMid" dangerouslySetInnerHTML={{__html: useTag }}/>
                </h1>
                <Menu />
            </div>
        )
    }

}

export default Header;