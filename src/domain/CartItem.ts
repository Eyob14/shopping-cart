import { Product } from "./Product";

export class CartItem {
  constructor(
    public readonly product: Product,
    public quantity: number
  ) {}

  getSubtotal(): number {
    return this.product.unitPrice * this.quantity;
  }
}
