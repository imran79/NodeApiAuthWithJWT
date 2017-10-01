"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const logger = require("morgan");
const BaseRoute_1 = require("./config/BaseRoute");
class App {
    constructor() {
        var app = express();
        app.use(bodyparser.urlencoded({ extended: true }));
        app.use(bodyparser.json());
        app.use(logger('dev'));
        app.use(BaseRoute_1.default.getRoutes);
        this.exps = app;
    }
}
exports.default = new App().exps;
//# sourceMappingURL=App.js.map