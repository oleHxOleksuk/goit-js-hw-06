const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngr = document.querySelector(`#ingredients`)
const liIngredient = []
ingredients.forEach(ingredient => {
  const item = document.createElement(`li`)
  item.className = `item`
  item.textContent = ingredient
  liIngredient.push(item)
})
listIngr.append(...liIngredient)