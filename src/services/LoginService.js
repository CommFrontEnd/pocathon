// import LoginActions from '../actions/LoginActions';

class LoginService {

  findUser() {

    var user = {
        name: 'Lepinard',
        firstname: 'Hervé',
        email: 'herve.lepinard@sonmail.com'
    }

    return user;

  }

}

export default new LoginService();