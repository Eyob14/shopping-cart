import { Product } from "./Product";
import { CartItem } from "./CartItem";

export class ShoppingCart {
  private readonly items: CartItem[] = [];

  addProduct(product: Product, quantity: number): void {
    this.items.push(new CartItem(product, quantity));
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotalPrice(): number {
    const total = this.items.reduce((sum, item) => sum + item.getSubtotal(), 0);

    return Number(total.toFixed(2));
  }
}
