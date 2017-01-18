import BaseStore from './BaseStore';

class AccountsStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._accounts = '';
    this._account = {};
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case "ACCOUNTS_GET":
        this._accounts = action.accounts;
        this.emitChange();
        break;
      case "ACCOUNT_GET":
        this._account[action.account.id] = action.account;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get accounts() {
    return this._accounts;
  }

  getOne(id) {
    return this._account[id];
  }
}

export default new AccountsStore();