import { Http, BaseRequestOptions} from '@angular/http';

/**
 * Extending BaseRequestOptions to inject common headers to all requests.
 */
export class CustomRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Authorization', 'Basic NWIwNzYyYmUtNWU3Zi00OTIyLWI1ZDQtM2FiMTU2YjY3M2U1OjAxOThkYTBjLTZlZTgtNGQ3Ny1hMDMyLWNkMTE3ZGI1MDRjNg==');
        this.headers.append('Content-Type', 'application/json');

    }
}