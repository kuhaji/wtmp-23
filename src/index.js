// Menu defined
const menu = [
  {name: 'Lingonberry jam', price: 4.0},
  {name: 'Mushroom and bean casserole', price: 5.5},
  {name: 'Chili-flavoured wheat', price: 3.0},
  {name: 'Vegetarian soup', price: 4.8},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.0},
];

// Validate menu items
const validateMealName = (name) => {
  const nameRegex = /^[A-Z][\w\s\-/,()]{3,63}$/;
  return nameRegex.test(name);
};

// Showing prices low to high
const sortedMenu = menu.sort((a, b) => a.price - b.price);
console.log(sortedMenu);

// Showing items only less than 5 €

const underFiveDishes = menu.filter((item) => item.price < 5.0);

// Increase all the prices by 15%

const increasePrices = menu.map((item) => ({
  name: item.name,
  price: item.price * 1.15,
}));

// Total cost of menu

const totalCost = menu.reduce((acc, item) => acc + item.price, 0);

// Testing validating

console.log(validateMealName('Lingonberry jam'));

// Testing dish prices under 5

console.log(underFiveDishes);

// Testing increasing prices

console.log(increasePrices);

// Testing total cost

console.log(
  `The total cost of eating the whole menu is: ${totalCost.toFixed(2)} €`
);
