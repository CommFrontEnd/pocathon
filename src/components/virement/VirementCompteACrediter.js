/**
 * Created by Erwan on 14/02/2017.
 */
import React from 'react';
import Accounts from '../accounts/Accounts'
import Account from '../accounts/Account'
import AccountStore from '../../stores/AccountStore'
import AccountService from '../../services/AccountService'

class VirementCompteACrediter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            accountIdACrediter : '',
            accountADebiter: this.getAccountState(this.props.params.accountIdADebiter),
            montantCrediter: '',
            libelleMontant: ''
        }
        this.handleAccountClick = this.handleAccountClick.bind(this);
        this.handleAccountADebiterClick = this.handleAccountADebiterClick.bind(this);
        this.handleInputMontantChange = this.handleInputMontantChange.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        if (!this.state.accountADebiter) {
            this.requestAccount();
        }
        AccountStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AccountStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({accountADebiter: this.getAccountState()});
    }

    requestAccount() {
        AccountService.findOne(this.props.params.accountIdADebiter);
    }

    getAccountState() {
        return AccountStore.getOne(this.props.params.accountIdADebiter);
    }

    handleAccountClick(accountId, event) {
        event.preventDefault();
        // On stocke la donnée dans le state
        this.setState({accountIdACrediter: accountId});
    }

    handleAccountADebiterClick(accountId, event) {
        event.preventDefault();

    }

    handleClick(event) {

        // TODO On sauvegarde en base de données
        // On redirige vers la page des comptes
        this.state.accountIdACrediter && this.state.montantCrediter ?
            this.context.router.push("/accounts")
            :
            console.log("Il faut sélectionner un compte et un montant")
        ;
    }

    handleInputMontantChange(event) {
        this.setState({montantCrediter: event.target.value});
    }

    handleInputLibelleMontantChange (event) {
        this.setState({libelleMontant: event.target.value});
    }

    render() {
        var button = (this.state.accountIdACrediter && this.state.montantCrediter ?
                <button className="btn" onClick={this.handleClick.bind(this)} >Confirmer le virement</button>
                :
                <button className="btn" onClick={this.handleClick.bind(this)} disabled>Confirmer le virement</button>
        );
        var accountIdADebiterSelected = this.state.accountADebiter ? this.state.accountADebiter.id : null;
        return (
            <div>
                <div className="o-panel-content">
                    <h2>Compte à débiter</h2>
                    <Account account={this.state.accountADebiter} accountClick={this.handleAccountADebiterClick} accountIdSelected={accountIdADebiterSelected}/>
                </div>
                <div className="o-panel-content">
                    <h2>Choisir un compte à créditer</h2>
                    <Accounts accountClick={this.handleAccountClick} accountIdSelected={this.state.accountIdACrediter} accountNotInList={this.props.params.accountIdADebiter}/>
                </div>
                <div>
                    <h2>Montant à créditer</h2>
                    <input type="text" onChange={this.handleInputMontantChange}/>
                    <label>Libellé du virement</label>
                    <input type="text" onChange={this.handleInputLibelleMontantChange}/>
                </div>

                {button}
            </div>
        )
    }

}

VirementCompteACrediter.contextTypes = {
    router: React.PropTypes.object
}

export default VirementCompteACrediter;