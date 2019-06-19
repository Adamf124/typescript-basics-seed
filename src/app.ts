console.log('Hello TypeScript!');
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calcCost(cost: number, toppings:number):number {
  return cost + 1.5 * toppings
}

const cost: number = calcCost(pizzaCost, pizzaToppings);
console.log(`The pizza costs: ${cost}`);