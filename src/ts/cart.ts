import Buyable from "./buyable";

export default class Cart {
  private __items: Buyable[] = [];

  add(item: Buyable): void {
    this.__items.push(item);
  }

  getAll(): Buyable[] {
    return [...this.__items]
  }

  get items(): Buyable[] {
    return [...this.__items]
  }

  getTotalAmount(): number {
    let totalAmount: number = 0;
    for(const item of this.__items) {
      totalAmount += item.price;
    }
    return totalAmount;
  }

  getDiscountedPrice(discount: number): number {
    const amount: number = this.getTotalAmount();
    const discountedPrice: number = amount - ((amount / 100) * discount);
    return discountedPrice;
  }

  removeProduct(id: number): void {
    const findItem = this.__items.find(item => item.id === id);
    this.__items.splice(this.__items.indexOf(findItem));
  }
}