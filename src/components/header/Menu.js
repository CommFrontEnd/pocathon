import React from 'react';
import { Icon } from 'react-fa';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isOpened: false};

        this.open = this.open.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    open() {
        this.setState(prevState => ({
            isOpened: !prevState.isOpened
        }))
    }

    handleClick(event) {
        event.preventDefault();

        // On créer un sessionStorage pour le user
        sessionStorage.removeItem('user');
        // On met en place la redirection à partir du context router déclaré dans le contextType plus bas
        this.context.router.push('/login'); // On met la bonne URL en place sur la page des comptes

    }

    render() {
        return (
            <div className={this.state.isOpened ? 'c-user menu-container js-user-menu is-opened' : 'c-user menu-container js-user-menu'} onClick={this.open}>
                <Icon name="user-circle-o" className="c-user__ico"/>
                Hervé Lepinard&nbsp;
                <Icon name="angle-down" />
                <ul className="menu">
                    <li className="menu__item"><a href="#"><Icon name="gear" /> Preferences</a></li>
                    <li className="menu__item"><a href="#" onClick={this.handleClick}><Icon name="unlock-alt" /> Logout</a></li>
                </ul>
            </div>
        )
    }

}

Menu.contextTypes = {
    router: React.PropTypes.object
};

export default Menu;