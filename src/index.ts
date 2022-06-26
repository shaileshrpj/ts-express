import 'reflect-metadata';
import { config } from './configs/config';
import { Application } from "./utils/application";
import { container } from "tsyringe"
import Routes from "./routes"
import { middleware } from './middlewares/middleware';

const routerContainer = container.resolve(Routes)

const app = new Application(
    config().port,
    middleware(),
    [routerContainer.getRoutes()]
);

app.connect();
app.listen();
