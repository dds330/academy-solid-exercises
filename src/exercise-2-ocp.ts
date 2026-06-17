// =============================================================
// Exercise 2 – Open/Closed Principle (OCP)
//
// YOUR TASK:
//   DiscountCalculator uses if/else chains that grow every time
//   a new customer type is added — requiring edits to existing code.
//
//   Refactor it so adding a new discount type (e.g. "pensioner"
//   at 40% off) requires NO changes to existing classes.
//
// Run:  npm run exercise-2
// =============================================================

// ---- PROBLEM CODE (do not delete — understand it first) -----
interface DiscountStrategy {
  calculate(price: number): number;
}

class StudentDiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price * 0.8; // 20% off
  }
}

class EmployeeDiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price * 0.7; // 30% off
  }
}

class VIPDiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price * 0.5; // 50% off
  }
}
class DiscountCalculator {
  constructor(private discountStrategy: DiscountStrategy) {}
  calculate(price: number): number {
    return this.discountStrategy.calculate(price);
  }
}

const studentDiscount = new StudentDiscount();
const employeeDiscount = new EmployeeDiscount();
const vipDiscount = new VIPDiscount();


console.log("Student price:  ", studentDiscount.calculate(100)); // 80
console.log("Employee price: ", employeeDiscount.calculate(100)); // 70
console.log("VIP price:      ", vipDiscount.calculate(100)); // 50
