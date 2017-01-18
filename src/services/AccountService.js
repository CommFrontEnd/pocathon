import request from 'reqwest';
import AccountActions from '../actions/AccountActions';

class AccountService {

  findAll() {
    request({
      url: "https://siipocathon.apispark.net:443/v1/accounts/",
      method: 'GET',
      crossOrigin: true,
      headers: {
        'Authorization': 'Basic NWIwNzYyYmUtNWU3Zi00OTIyLWI1ZDQtM2FiMTU2YjY3M2U1OjAxOThkYTBjLTZlZTgtNGQ3Ny1hMDMyLWNkMTE3ZGI1MDRjNg=='
      }
    })
    .then(function(response) {
      AccountActions.gotAccounts(response);
    });
  }

}

export default new AccountService()