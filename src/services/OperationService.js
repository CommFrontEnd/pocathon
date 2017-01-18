import request from 'reqwest';
import OperationActions from '../actions/OperationActions';

class OperationService {

  findOne(operationId) {
    request({
      url: "https://siipocathon.apispark.net:443/v1/operations/" + operationId,
      method: 'GET',
      crossOrigin: true,
      headers: {
        'Authorization': 'Basic NWIwNzYyYmUtNWU3Zi00OTIyLWI1ZDQtM2FiMTU2YjY3M2U1OjAxOThkYTBjLTZlZTgtNGQ3Ny1hMDMyLWNkMTE3ZGI1MDRjNg=='
      }
    })
    .then(function(response) {
      OperationActions.gotOperation(response);
    });
  }

}

export default new OperationService()