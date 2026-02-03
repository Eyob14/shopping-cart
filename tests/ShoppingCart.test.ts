import { ShoppingCart } from "../src/domain/ShoppingCart";
import { Product } from "../src/domain/Product";

describe("Shopping Cart - Step 1", () => {
  it("adds multiple products and calculates total price", () => {
    const cart = new ShoppingCart();
    const doveSoap = new Product("Dove Soap", 39.99);

    cart.addProduct(doveSoap, 5);

    const items = cart.getItems();
    expect(items.length).toBe(1);
    expect(items[0]!.quantity).toBe(5);
    expect(cart.getTotalPrice()).toBe(199.95);
  });
});

describe("Shopping Cart - Step 2", () => {
  it("aggregates quantities when same product is added multiple times", () => {
    const cart = new ShoppingCart();
    const doveSoap = new Product("Dove Soap", 39.99);

    cart.addProduct(doveSoap, 5);
    cart.addProduct(doveSoap, 3);

    const items = cart.getItems();
    expect(items.length).toBe(1);
    expect(items[0]!.quantity).toBe(8);
    expect(cart.getTotalPrice()).toBe(319.92);
  });
});

describe("Shopping Cart - Step 3", () => {
  it("calculates tax and total price for multiple products", () => {
    const cart = new ShoppingCart(12.5);

    const doveSoap = new Product("Dove Soap", 39.99);
    const axeDeo = new Product("Axe Deo", 99.99);

    cart.addProduct(doveSoap, 2);
    cart.addProduct(axeDeo, 2);

    expect(cart.getSalesTax()).toBe(35.0);
    expect(cart.getTotalPrice()).toBe(314.96);
  });
});
