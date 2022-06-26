import express, { Application as App } from 'express';
import { connect, connection } from 'mongoose';
import { db } from './../configs/db';
import { singleton } from 'tsyringe';

@singleton()

export class Application {
    public app: App;

    constructor(
        private port: number,
        middleware: Array<any>,
        routes: Array<express.Router>,
        private apiPath: string = '/api',
        private staticPath: string = "public"
    ) {
        this.app = express()
        this.middleware(middleware)
        this.routes(routes);
        this.assets(this.staticPath);
    }

    private routes(routes: Array<express.Router>) {
        routes.forEach((r) => {
            this.app.use(`${this.apiPath}`, r);
        });
    }

    private middleware(middlewares: Array<any>) {
        middlewares.forEach(middleware => {
            this.app.use(middleware)
        })
    }

    private assets(path: string) {
        this.app.use(express.static(path));
    }

    public connect() {
        connect(db().mongoUrl, { dbName: db().mongoDbName });
        connection
            .once("open", () => {
                console.log("Connected to mongo");
            })
            .on("error", error => {
                console.log(`Error on mongo connection: ${error}`);
                process.exit(1)
            })
            .on("disconnected", () => {
                console.log('Mongo disconnected');
            });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("APP LISTENING ON PORT:", this.port);
        });
    }
}
