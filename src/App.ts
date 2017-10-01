import * as path from 'path';
import * as express from 'express'
import * as bodyparser from 'body-parser'
import * as logger from 'morgan';
import BaseRoute from './config/BaseRoute'

class App {
  public exps

  constructor() {
    var app = express();
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    app.use(logger('dev'));
    app.use(BaseRoute.getRoutes);
    this.exps = app;
  }


}

export default new App().exps