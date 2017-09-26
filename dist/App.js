"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyparser = require("body-parser");
const logger = require("morgan");
const BaseRoute_1 = require("./config/BaseRoute");
class App {
    constructor() {
        this.express = BaseRoute_1.default.getRoutes;
        this.express.use(bodyparser.json);
        this.express.use(logger('dev'));
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map