"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _baseCommandJs = require("../base-command.js");
class Hello extends _baseCommandJs.BaseCommand {
    static description = "Test command to verify that the CLI build is valid.";
    static examples = [
        `$ condohub hello world`
    ];
    static args = [
        {
            name: "word"
        }
    ];
    constructor(argv, config){
        super(argv, config, {
            name: "hello"
        });
    }
    async run() {
        this.logDebug("starting run method");
        const { args  } = await this.parse(Hello);
        if (args.word) {
            this.logCommand(`hello ${args.word}`);
            return;
        }
        this.logCommand(`hello`);
    }
}
exports.default = Hello;

//# sourceMappingURL=hello.js.map