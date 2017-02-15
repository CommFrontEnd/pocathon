/**
 * Created by Erwan on 14/02/2017.
 */
import React from 'react';
import Accounts from '../accounts/Accounts'

class VirementCompteADebiter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountIdADebiter : ''
        }
        this.handleAccountClick = this.handleAccountClick.bind(this);
    }

    handleAccountClick(accountId, event) {
        event.preventDefault();
        // On stocke la donnée dans le state
        this.setState({accountIdADebiter: accountId});
    }

    handleClick(event) {
        // On redirige vers la page
        this.state.accountIdADebiter ?
            this.context.router.push("/virement/crediter/"+this.state.accountIdADebiter)
            :
            console.log("Il faut sélectionner un compte")
        ;
    }

    render() {
        var button = (this.state.accountIdADebiter ?
            <button className="btn" onClick={this.handleClick.bind(this)} >Choisir le compte à créditer</button>
            :
            <button className="btn" onClick={this.handleClick.bind(this)} disabled>Choisir le compte à créditer</button>
        )

        return (
            <div>
                <div className="o-panel-content">
                    <h2>Choisir un compte à débiter</h2>
                    <Accounts accountClick={this.handleAccountClick} accountIdSelected={this.state.accountIdADebiter}/>
                </div>
                {button}
            </div>
        )
    }

}

VirementCompteADebiter.contextTypes = {
    router: React.PropTypes.object
}

export default VirementCompteADebiter;