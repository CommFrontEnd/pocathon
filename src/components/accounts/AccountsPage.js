/**
 * Created by Erwan on 14/02/2017.
 */
import React from 'react';
import { Link } from 'react-router';
import Accounts from '../accounts/Accounts'

class AccountsPage extends React.Component {

    handleAccountClick(accountId, event) {
        event.preventDefault();
        // On permet la redirection vers la page du compte à partir du context du composant Account
        this.context.router.push("accounts/"+accountId);
    }


    render() {
        return(
            <div>

                    <Accounts accountClick={this.handleAccountClick} accountSelected=""/>
                    <div>
                        <Link className="btn" to={`/virement/debiter`}>Faire un virement</Link>
                    </div>


            </div>
        )
    }
}

export default AccountsPage;