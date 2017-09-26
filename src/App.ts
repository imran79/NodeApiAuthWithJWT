import * as path from 'path';
import * as express from 'express'
import * as bodyparser from 'body-parser'
import * as logger from 'morgan';
import BaseRoute from './config/BaseRoute'

class App {
  public express

  constructor() {
    this.express = BaseRoute.getRoutes
    this.express.use(bodyparser.json);
    this.express.use(logger('dev'));


  }


}

export default new App().express