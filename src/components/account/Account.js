import React from 'react';

class Account extends React.Component {
    render() {
        return(
            <div class="c-list-item">
                <a class="c-list-item__title" href="#">

                    <div>
                        Compte courant
                        <div class="c-field c-field--left c-list-item__subtitle">
                            <div class="c-field__label">N° de compte:</div>
                            <div class="c-field__value">923456789012345678</div>
                        </div>
                    </div>

                    <div class="c-list-item__actions fa fa-angle-right">
                    </div>
                </a>

                <div class="c-list-item__content js-account-details">

                    <div class="c-field">
                        <div class="c-field__label"></div>
                        <div class="c-field__value">184,54 € <span class="down fa fa-angle-down"></span></div>
                    </div>

                    <div class="c-list-item__detail">

                        <div class="c-field">
                            <div class="c-field__label">Virement</div>
                            <div class="c-field__value is-valid">+34,44 €</div>
                        </div>

                        <div class="c-field">
                            <div class="c-field__label">Impôts</div>
                            <div class="c-field__value is-invalid">-150,80 €</div>
                        </div>

                        <div class="c-field">
                            <div class="c-field__label">Crédit voiture</div>
                            <div class="c-field__value is-invalid">-132,44 €</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Account;