import * as express from 'express';


class BaseRoute {
    static app = express();
    static route = express.Router();

    static get getRoutes(): any {

        BaseRoute.route.get('/user', (req, res): void => {
            try {
                res.send({ 'success': 'get all users' });

            } catch (ex) {
                res.send({ "error": "error in your request" + ex });
            }

        });

        BaseRoute.app.use('/', BaseRoute.route);
        return BaseRoute.app;
    }



}
export default BaseRoute;