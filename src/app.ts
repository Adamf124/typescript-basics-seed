console.log('Hello TypeScript!');
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calcCost(cost: number, toppings:number):number {
  return cost + 1.5 * toppings
}

const cost: number = calcCost(pizzaCost, pizzaToppings);
console.log(`The pizza costs: ${cost}`);
// <----------- END Number Type Practice ----------->

const coupon: string = 'pizza21';

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage);
// <----------- END STRING PRACTICE ------------>