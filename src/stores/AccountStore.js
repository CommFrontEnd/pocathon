import BaseStore from './BaseStore';

class AccountsStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._accounts = '';
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case "ACCOUNTS_GET":
        this._accounts = action.accounts;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  get accounts() {
    return this._accounts;
  }
}

export default new AccountsStore();