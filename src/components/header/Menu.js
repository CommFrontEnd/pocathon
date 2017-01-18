import React from 'react';
import { Icon } from 'react-fa';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isOpened: false};

        this.open = this.open.bind(this);
    }

    open() {
        this.setState(prevState => ({
            isOpened: !prevState.isOpened
        }))
    }

    render() {
        return (
            <div className={this.state.isOpened ? 'c-user menu-container js-user-menu is-opened' : 'c-user menu-container js-user-menu'} onClick={this.open}>
                <Icon name="user-circle-o" className="c-user__ico"/>
                Hervé Lepinard&nbsp;
                <Icon name="angle-down" />
                <ul className="menu">
                    <li className="menu__item"><a href="#"><Icon name="gear" /> Preferences</a></li>
                    <li className="menu__item"><a href="/"><Icon name="unlock-alt" /> Logout</a></li>
                </ul>
            </div>
        )
    }

}

export default Menu;