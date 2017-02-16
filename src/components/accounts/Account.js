import React from 'react';
import AccountOperation from './AccountOperation';

class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        };

        this.open = this.open.bind(this);
    }

    open() {
        this.setState(prevState => ({
            isSelected: !prevState.isSelected
        }))
    }

    render() {
        const account = this.props.account;
        if (!account) {
            return(<div></div>)
        }
        const operations = Object
            .keys(account.operationsList)
            .map(key => <AccountOperation key={key} id={account.operationsList[key]}/>);
        return(
            <div className={"c-list-item "+(account.id === this.props.accountIdSelected ? 'u-accountSelected' : '')}>
                <div className="c-list-item__title" onClick={this.props.accountClick.bind(this, account.id)}>

                    <div>
                        Compte courant
                        <div className="c-field c-field--left c-list-item__subtitle">
                            <div className="c-field__label">N° de compte:</div>
                            <div className="c-field__value">{account.accountNumber}</div>
                        </div>
                    </div>

                    <div className="c-list-item__actions fa fa-angle-right">
                        
                    </div>
                </div>

                <div className={this.state.isSelected ? 'c-list-item__content js-account-details is-selected' : 'c-list-item__content js-account-details'} onClick={this.open}>

                    <div className="c-field">
                        <div className="c-field__label"></div>
                        <div className="c-field__value">{account.balance} {account.currency} <span className="down fa fa-angle-down"></span></div>
                    </div>

                    <div className="c-list-item__detail">
                        {operations}
                    </div>

                </div>
            </div>
        )
    }
        
}

Account.contextTypes = {
    router: React.PropTypes.object
};

export default Account;