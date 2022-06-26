import { Schema, model } from "mongoose";
import { singleton } from 'tsyringe'
import BaseModel from "./base.model";

interface ExampleInterface {
    name: string,
    email: string,
    age: number
}

const ExampleSchema: Schema = new Schema<ExampleInterface>({
    name: { type: String },
    email: { type: String },
    age: { type: Number }
});

@singleton()
export class ExampleModel extends BaseModel {
    constructor() {
        super(model<ExampleInterface>('Example', ExampleSchema))
    }
}