import { Model, Document, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';

export class BaseRepository<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(item: any, options?: any): Promise<T> {
    const doc = new this.model(item);
    return doc.save(options);
  }

  async find(filter: FilterQuery<T> = {}, projection?: any, options?: QueryOptions): Promise<T[]> {
    return this.model.find(filter, projection, options).exec();
  }

  async findOne(filter: FilterQuery<T>, projection?: any, options?: QueryOptions): Promise<T | null> {
    return this.model.findOne(filter, projection, options).exec();
  }

  async findById(id: string, projection?: any, options?: QueryOptions): Promise<T | null> {
    return this.model.findById(id, projection, options).exec();
  }

  async update(filter: FilterQuery<T>, update: UpdateQuery<T>, options: QueryOptions = { new: true }): Promise<T | null> {
    return this.model.findOneAndUpdate(filter, update, options).exec();
  }

  async delete(filter: FilterQuery<T>, options?: QueryOptions): Promise<any> {
    return this.model.deleteOne(filter, options).exec();
  }

  async deleteMany(filter: FilterQuery<T>, options?: QueryOptions): Promise<any> {
    return this.model.deleteMany(filter, options).exec();
  }

  async countDocuments(filter: FilterQuery<T> = {}): Promise<number> {
    return this.model.countDocuments(filter).exec();
  }

  async aggregate(pipeline: any[], options?: any): Promise<any[]> {
    return this.model.aggregate(pipeline, options).exec();
  }
}

export default BaseRepository;
