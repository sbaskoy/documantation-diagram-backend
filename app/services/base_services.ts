import { FilterQuery, HydratedDocument, Model, UpdateQuery } from "mongoose";

export default class BaseService<T> {
    private Model: Model<T>;
    private populate?: any;
    constructor(model: Model<T>, _populate?: any) {
        this.Model = model;
        this.populate = _populate;
    }
    findAll = () => {
        var q = this.Model.find({});
        return this.populate ? q.populate(this.populate) : q;
    }

    findById = (id: string) => {
        var q = this.Model.findById(id);
        return this.populate ? q.populate(this.populate) : q;
    }

    save = (data: T) => new this.Model(data).save()

    findWhere = (where: FilterQuery<T>) => {
        var q = this.Model.find(where);
        return this.populate ? q.populate(this.populate) : q;
    }

    findOne = (where: FilterQuery<T>) => {
        var q = this.Model.findOne(where);
        return this.populate ? q.populate(this.populate) : q;
    }
    delete = (id: string) => this.Model.findByIdAndDelete(id);

    updateWithWhere = (where: FilterQuery<T>, data: UpdateQuery<T>) => {
        var q = this.Model.findOneAndUpdate(where, data, { new: true })
        return this.populate ? q.populate(this.populate) : q;
    };

    updateWithId = (id: string, data: UpdateQuery<T>) => {
        var q = this.Model.findByIdAndUpdate(id, data, { new: true });
        return this.populate ? q.populate(this.populate) : q;
    }
}