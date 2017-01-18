import React from 'react';

class Account extends React.Component {
    render() {
        return(
            <div className="c-list-item">
                <a className="c-list-item__title" href="#">

                    <div>
                        Compte courant
                        <div className="c-field c-field--left c-list-item__subtitle">
                            <div className="c-field__label">N° de compte:</div>
                            <div className="c-field__value">923456789012345678</div>
                        </div>
                    </div>

                    <div className="c-list-item__actions fa fa-angle-right">
                    </div>
                </a>

                <div className="c-list-item__content js-account-details">

                    <div className="c-field">
                        <div className="c-field__label"></div>
                        <div className="c-field__value">184,54 € <span className="down fa fa-angle-down"></span></div>
                    </div>

                    <div className="c-list-item__detail">

                        <div className="c-field">
                            <div className="c-field__label">Virement</div>
                            <div className="c-field__value is-valid">+34,44 €</div>
                        </div>

                        <div className="c-field">
                            <div className="c-field__label">Impôts</div>
                            <div className="c-field__value is-invalid">-150,80 €</div>
                        </div>

                        <div className="c-field">
                            <div className="c-field__label">Crédit voiture</div>
                            <div className="c-field__value is-invalid">-132,44 €</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Account;