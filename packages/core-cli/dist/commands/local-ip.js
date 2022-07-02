"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _os = _interopRequireDefault(require("os"));
var _baseCommandJs = require("../base-command.js");
class LocalIp extends _baseCommandJs.BaseCommand {
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
    constructor(argv, config){
        super(argv, config, {
            name: "local-ip"
        });
    }
    async run() {
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