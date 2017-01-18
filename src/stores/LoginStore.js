import BaseStore from './BaseStore';

class LoginStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this))
        this._user = '';
        this._token = '';
    }

    _registerToActions(action) {
    switch(action.actionType) {
      case "USER_GET":
        this._user = action.user;
        this._token = action.token;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  set user(user) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  get token() {
    return this._token;
  }

}

export default new LoginStore;