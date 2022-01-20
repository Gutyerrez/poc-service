import { IRepository } from 'Misc/Repository/IRepository';

import { IProvider } from 'Misc/Provider/IProvider';

export class RepositoryProvider<T extends IRepository> implements IProvider<T> {
  private repository!: T;

  private RepositorySupplier!: { new(): T };

  constructor(
    repositorySupplier: { new(): T },
  ) { this.RepositorySupplier = repositorySupplier; }

  prepare = () => {
    this.repository = new this.RepositorySupplier();
  };

  provide = () => this.repository;
}
