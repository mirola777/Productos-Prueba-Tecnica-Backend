export class PrismDataPreparer {
  public static clear<T>(object: object): any {
    const data = JSON.parse(JSON.stringify(object));

    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) {
        delete data[key];
      }
    });

    if (data["id"] !== undefined) delete data["id"];

    return data;
  }
}
