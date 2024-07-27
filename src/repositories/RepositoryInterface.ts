export interface RepositoryInterface<T> {
  create(data: T): Promise<T>;
  update(data: T): Promise<T>;
  delete(id: string): Promise<void>;
  get(id: string): Promise<T>;
  getAll(): Promise<T[]>;
  checkIfExists(id: string): Promise<boolean>;
}
