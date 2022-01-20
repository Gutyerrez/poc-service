export class StringUtils {
  public static equals = (
    value1: string,
    value2: string,
  ) => value1.toLowerCase() === value2.toLowerCase();

  public static equalsEach = (
    values1: string[],
    values2: string[],
  ) => {
    var i = 0;

    do {
      const value1 = values1[i];
      const value2 = values2[i];

      if (value1.toLowerCase() !== value2.toLowerCase()) {
        return false;
      }

      i += 1;
    } while (i < values1.length && i < values2.length);

    return true;
  };
}
