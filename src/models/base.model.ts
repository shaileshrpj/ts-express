import { Model } from 'mongoose';

export default class BaseModel {
    #model: Model<any>;

    constructor(model: Model<any>) {
        this.#model = model;
    }

    getModel() {
        return this.#model;
    }
}