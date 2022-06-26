import { injectable } from "tsyringe";
import { ExampleModel } from "../models/example.model";
@injectable()

export default class ExampleService {
    exampleModel: ExampleModel

    constructor(exampleModel: ExampleModel) {
        this.exampleModel = exampleModel
    }

    async addUser(user: any) {
    }
}