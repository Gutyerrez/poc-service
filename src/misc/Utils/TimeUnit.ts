export class TimeUnit {
  static DAYS = new TimeUnit(86400000);
  static HOURS = new TimeUnit(360000);
  static MINUTES = new TimeUnit(60000);
  static SECONDS = new TimeUnit(1000);
  static MILLISECONDS = new TimeUnit(1);

  public duration: number;

  constructor(
    duration: number,
  ) {
    this.duration = duration;
  }
}
