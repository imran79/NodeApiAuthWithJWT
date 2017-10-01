import * as express from 'express';
import * as jwt from 'jsonwebtoken'



class BaseRoute {
    static app = express();
    static route = express.Router();
    static secret: string = 'God is one';

    static get getRoutes(): any {

        BaseRoute.route.post('/login', (req, res): void => {
            if (req.body.username === 'imran' && req.body.password === 'khan') {
                const jwtToken = jwt.sign('imrankhan', this.secret);
                res.send({ 'success': 'login is successful', 'token': jwtToken })
            }

        });
        BaseRoute.route.get('/user', (req, res): void => {
            try {
                console.log(req.headers['token']);
                console.log(jwt.verify(req.headers['token'] as string, this.secret));
                if (req.headers['token'] && jwt.verify(req.headers['token'] as string, this.secret) === 'imrankhan') {
                    res.send({ 'success': 'get all users' });
                } else {
                    res.status(403);
                    res.send('User is not authorize to access the api');
                }

            } catch (ex) {
                res.status(401);
                res.send({ "error": "error in your request" + ex });
            }

        });

        BaseRoute.app.use('/', BaseRoute.route);
        return BaseRoute.app;
    }



}
export default BaseRoute;