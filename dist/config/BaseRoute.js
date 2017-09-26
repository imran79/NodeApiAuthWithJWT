"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class BaseRoute {
    static get getRoutes() {
        BaseRoute.route.get('/user', (req, res) => {
            try {
                res.send({ 'success': 'get all users' });
            }
            catch (ex) {
                res.send({ "error": "error in your request" + ex });
            }
        });
        BaseRoute.app.use('/', BaseRoute.route);
        return BaseRoute.app;
    }
}
BaseRoute.app = express();
BaseRoute.route = express.Router();
exports.default = BaseRoute;
//# sourceMappingURL=BaseRoute.js.map