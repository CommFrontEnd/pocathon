import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
  gotUser: (user) => {
    AppDispatcher.dispatch({
      actionType: "USER_GET",
      user: user
    })
  }
}