"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _os = _interopRequireDefault(require("os"));
var _core = require("@oclif/core");
var _logUtilitiesJs = require("../utilities/log.utilities.js");
class LocalIp extends _core.Command {
    log = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:local-ip`);
    logWarn = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:local-ip:warn`);
    logError = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:local-ip:error`);
    static description = "Print out local machine ip on the connected network";
    static examples = [
        `$ nr local-ip`
    ];
    static args = [
        {
            name: "args"
        }
    ];
    static flags = {
    };
    async run() {
        (0, _logUtilitiesJs).enableDebug();
        const { args , flags  } = await this.parse(LocalIp);
        let localIp;
        const ifaces = _os.default.networkInterfaces();
        const interfacesIds = Object.keys(ifaces);
        this.log(`found: ${interfacesIds.length} interfaces`);
        interfacesIds.forEach((ifname)=>{
            const networkInterfaces = ifaces[ifname];
            networkInterfaces === null || networkInterfaces === void 0 ? void 0 : networkInterfaces.forEach((iface)=>{
                if (!/ipv4/gi.test(iface.family)) {
                    return;
                }
                this.log(`found ipv4: ${iface.address}`);
            });
        });
    }
}
exports.default = LocalIp;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=local-ip.js.map