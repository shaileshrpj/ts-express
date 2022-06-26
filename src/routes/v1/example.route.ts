import { Router, Request, Response } from 'express';
import { injectable, singleton } from 'tsyringe';
import ExampleController from '../../controllers/example.controller';

@singleton()
@injectable()

export default class ExampleRoutes {
    router: Router;
    exampleController: ExampleController

    constructor(exampleController: ExampleController) {
        this.exampleController = exampleController
        this.router = Router();
    }

    getRoutes(): Router {
        this.router.get('/', this.exampleController.example)
        return this.router;
    }
}