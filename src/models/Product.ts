import { Parser } from "../util/Parser";
export class Product {
  private id: string;
  private name: string;
  private price: number;
  private description: string;
  private image: string;
  private stock: number;

  constructor({
    id,
    name,
    price,
    description,
    image,
    stock,
  }: {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    stock: number;
  }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.stock = stock;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getDescription() {
    return this.description;
  }

  public getImage() {
    return this.image;
  }

  public getStock() {
    return this.stock;
  }

  public static fromJson(json: any) {
    return new Product({
      id: json.id,
      name: json.name,
      price: Parser.toNumber(json.price),
      description: json.description,
      image: json.image,
      stock: Parser.toNumber(json.stock),
    });
  }
}
