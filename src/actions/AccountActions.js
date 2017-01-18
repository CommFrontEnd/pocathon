import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
  gotAccounts: (accounts) => {
    AppDispatcher.dispatch({
      actionType: "ACCOUNTS_GET",
      accounts: accounts
    })
  }
}