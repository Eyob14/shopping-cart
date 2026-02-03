import { ShoppingCart } from "../src/domain/ShoppingCart";
import { Product } from "../src/domain/Product";

describe("Shopping Cart - Step 1", () => {
  it("adds multiple products and calculates total price", () => {
    const cart = new ShoppingCart();
    const doveSoap = new Product("Dove Soap", 39.99);

    cart.addProduct(doveSoap, 5);

    expect(cart.getItems().length).toBe(1);
    expect(cart.getItems()[0].quantity).toBe(5);
    expect(cart.getTotalPrice()).toBe(199.95);
  });
});
