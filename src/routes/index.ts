import { Router, Request, Response } from 'express';
import { injectable, singleton } from 'tsyringe';
import ExampleRoutes from './v1/example.route'

@singleton()
@injectable()
export default class Routes {
    exampleRoutes: ExampleRoutes
    router: Router;

    constructor(exampleRoutes: ExampleRoutes) {
        this.exampleRoutes = exampleRoutes;
        this.router = Router();
    }

    getRoutes(): Router {
        this.router.use('/example', this.exampleRoutes.getRoutes())
        return this.router;
    }
}