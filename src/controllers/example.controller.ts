import { injectable } from "tsyringe";
import { Request, Response } from "express";
import ExampleService from "../services/example.service";
@injectable()

export default class ExampleController {
    exampleService: ExampleService
    constructor(exampleService: ExampleService) {
        this.exampleService = exampleService
    }

    async example(req: Request, res: Response) {
        return res.send("i m in controller")
    }
}