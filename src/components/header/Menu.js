import React from 'react';
import { Icon } from 'react-fa';

class Menu extends React.Component {

    render() {
        return (
            <div className="c-user menu-container js-user-menu">
                <Icon name="user-circle-o" className="c-user__ico"/>
                Hervé Lepinard&nbsp;
                <Icon name="angle-down" />
                <ul className="menu">
                    <li className="menu__item"><a href="#"><Icon name="gear" /> Preferences</a></li>
                    <li className="menu__item"><a href="/login.html"><Icon name="unlock-alt" /> Logout</a></li>
                </ul>
            </div>
        )
    }

}

export default Menu;