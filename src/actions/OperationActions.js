import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
  gotOperation: (operation) => {
    AppDispatcher.dispatch({
      actionType: "OPERATION_GET",
      operation: operation
    })
  }
}