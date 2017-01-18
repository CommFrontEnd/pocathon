import React from 'react';
import AccountStore from '../../stores/AccountStore'
import AccountService from '../../services/AccountService'
import Operation from './Operation';

class Account extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {isSelected: false};
        this.state = this.getAccountState();
        this._open = this._open.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        if (!this.state.account) {
            this.requestAccount();
        }
        AccountStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AccountStore.removeChangeListener(this._onChange);
    }

    _open() {
        this.setState(prevState => ({
            isSelected: !prevState.isSelected
        }))
    }

    _onChange() {
        this.setState(this.getAccountState());
    }
    
    requestAccount() {
        AccountService.findOne(this.props.params.accountId);
    }

    getAccountState() {
        return {
            account: AccountStore.getOne(this.props.params.accountId)
        };
    }
    
    render() {
        var account = this.state.account;
        if (!account) {
            return(<div></div>)
        }
        const operations = Object
            .keys(account.operationsList)
            .map(key => <Operation key={key} id={account.operationsList[key]}/>);
        return(
            <div>
                <div className="c-list-item">
                    <div className="c-list-item__title">
                        <div className="u-fullWidth">Compte courant
                            <div className="c-list-item__subtitle c-field c-field--left">
                                <div className="c-field__label">N° de compte:</div>
                                <div className="c-field__value">{account.accountNumber}</div>
                            </div>
                            <div className="c-heading c-field">
                                <div className="field__label">Solde</div>
                                <div className="u-blank c-field__value is-valid">{account.balance} {account.currency}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {operations}
            </div>
        )
    }
        
}

export default Account;