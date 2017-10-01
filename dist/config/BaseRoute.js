"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const jwt = require("jsonwebtoken");
class BaseRoute {
    static get getRoutes() {
        BaseRoute.route.post('/login', (req, res) => {
            if (req.body.username === 'imran' && req.body.password === 'khan') {
                const jwtToken = jwt.sign('imrankhan', this.secret);
                res.send({ 'success': 'login is successful', 'token': jwtToken });
            }
        });
        BaseRoute.route.get('/user', (req, res) => {
            try {
                console.log(req.headers['token']);
                console.log(jwt.verify(req.headers['token'], this.secret));
                if (req.headers['token'] && jwt.verify(req.headers['token'], this.secret) === 'imrankhan') {
                    res.send({ 'success': 'get all users' });
                }
                else {
                    res.status(403);
                    res.send('User is not authorize to access the api');
                }
            }
            catch (ex) {
                res.status(401);
                res.send({ "error": "error in your request" + ex });
            }
        });
        BaseRoute.app.use('/', BaseRoute.route);
        return BaseRoute.app;
    }
}
BaseRoute.app = express();
BaseRoute.route = express.Router();
BaseRoute.secret = 'God is one';
exports.default = BaseRoute;
//# sourceMappingURL=BaseRoute.js.map