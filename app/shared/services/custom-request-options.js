"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = require('@angular/http');
/**
 * Extending BaseRequestOptions to inject common headers to all requests.
 */
var CustomRequestOptions = (function (_super) {
    __extends(CustomRequestOptions, _super);
    function CustomRequestOptions() {
        _super.call(this);
        this.headers.append('Authorization', 'Basic NWIwNzYyYmUtNWU3Zi00OTIyLWI1ZDQtM2FiMTU2YjY3M2U1OjAxOThkYTBjLTZlZTgtNGQ3Ny1hMDMyLWNkMTE3ZGI1MDRjNg==');
        this.headers.append('Content-Type', 'application/json');
        this.url = "https://siipocathon.apispark.net:443" + this.url;
    }
    return CustomRequestOptions;
}(http_1.BaseRequestOptions));
exports.CustomRequestOptions = CustomRequestOptions;
//# sourceMappingURL=custom-request-options.js.map