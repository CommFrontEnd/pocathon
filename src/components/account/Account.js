import React from 'react';
import Operation from './Operation';

class Account extends React.Component {

    render() {
        return(
            <div>
                <div className="c-list-item">
                    <div className="c-list-item__title">
                    <div className="u-fullWidth">Compte courant
                        <div className="c-list-item__subtitle c-field c-field--left">
                            <div className="c-field__label">N° de compte:</div>
                            <div className="c-field__value">{this.props.params.accountId}</div>
                        </div>
                        <div className="c-heading c-field">
                            <div className="field__label">Solde</div>
                            <div className="u-blank c-field__value is-valid">150.000,00 €</div>
                        </div>
                        </div>
                    </div>
                </div>
                <Operation />
            </div>
        )
    }
        
}

export default Account;