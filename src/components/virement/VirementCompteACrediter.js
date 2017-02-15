/**
 * Created by Erwan on 14/02/2017.
 */
import React from 'react';
import Accounts from '../accounts/Accounts'

class VirementCompteACrediter extends React.Component {

    handleAccountClick(accountId, event) {
        event.preventDefault();
        // On permet la redirection vers la page du compte à partir du context du composant Account

    }

    render() {
        return (
            <div>
                <div className="o-panel-content">
                    <h2>Choisir un compte à créditer</h2>
                    <Accounts accountClick={this.handleAccountClick}/>
                </div>
            </div>
        )
    }

}

export default VirementCompteACrediter;