import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
  gotAccounts: (accounts) => {
    AppDispatcher.dispatch({
      actionType: "ACCOUNTS_GET",
      accounts: accounts
    })
  },
  gotAccount: (account) => {
    AppDispatcher.dispatch({
      actionType: "ACCOUNT_GET",
      account: account
    })
  }
}