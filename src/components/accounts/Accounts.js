import React from 'react';
import AccountStore from '../../stores/AccountStore';
import LoginStore from '../../stores/LoginStore';
import AccountService from '../../services/AccountService';
import Account from './Account'

class Accounts extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getAccountsState();
        this._onChange = this._onChange.bind(this);

        console.log('sessionStorage',sessionStorage.getItem('user'));
    }

    componentDidMount() {
        if (!this.state.accounts) {
            this.requestAccounts();
        }
        AccountStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AccountStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(this.getAccountsState());
    }
    
    requestAccounts() {
        AccountService.findAll();
    }

    getAccountsState() {
        return {
            accounts: AccountStore.accounts
        };
    }

    render() {
        const accounts = Object
            .keys(this.state.accounts)
            .map(key => <Account key={key} account={this.state.accounts[key]}/>);
        return(
            <div className="o-panel-content">
                {accounts}
            </div>
        )
    }
}

export default Accounts;