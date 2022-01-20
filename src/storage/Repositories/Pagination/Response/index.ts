export class PaginationResponse<T> {
  public firstPage: number;
  public currentPage: number;
  public lastPage: number;

  public total: number;

  public data: T[];

  constructor(
    firstPage: number,
    currentPage: number,
    lastPage: number,
    total: number,
    data: T[],
  ) {
    this.firstPage = firstPage;
    this.currentPage = currentPage;
    this.lastPage = lastPage;

    this.total = total;

    this.data = data;
  }
}
