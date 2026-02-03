import { Product } from "./Product";
import { CartItem } from "./CartItem";
import { roundToTwoDecimals } from "../utils";

export class ShoppingCart {
  private readonly items: CartItem[] = [];

  constructor(private readonly taxRate: number = 0) {}

  addProduct(product: Product, quantity: number): void {
    const existingItem = this.items.find(
      (item) => item.product.name === product.name
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }
  }

  getItems(): readonly CartItem[] {
    return [...this.items];
  }

  private getSubtotal(): number {
    const total = this.items.reduce((sum, item) => sum + item.getSubtotal(), 0);

    return roundToTwoDecimals(total);
  }

  getSalesTax(): number {
    const tax = this.getSubtotal() * (this.taxRate / 100);
    return roundToTwoDecimals(tax);
  }

  getTotalPrice(): number {
    const total = this.getSubtotal() + this.getSalesTax();
    return roundToTwoDecimals(total);
  }
}
