import BaseStore from './BaseStore';

class OperationStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._operations = {};
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case "OPERATION_GET":
        this._operations[action.operation.id] = action.operation;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  getOne(id) {
    return this._operations[id];
  }
}

export default new OperationStore();