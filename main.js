var letsCookButton = document.querySelector(".button-lets-cook");
var clearButton = document.querySelector(".clear-button")
var radSideDish = document.querySelector("#rad-side");
var radMainDish = document.querySelector("#rad-mainDish");
var radEntireMeal = document.querySelector("#rad-entireMeal")
var radDesset = document.querySelector("#rad-dessert");
var recipeToBeShown = document.querySelector(".recipe-to-be-shown");
var recipeContent = document.querySelector(".recipe-content");
var cookPotImage = document.querySelector(".cook-pot")








var sideDishes = ["Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"]

var mainDishes = ["Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"]

var desserts = ["Apple Pie",
'Lemon Meringue Pie',
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
'Cheesecake',
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons"]

function getRandomIndexForSide() {
  return Math.floor(Math.random() * sideDishes.length);
}
function getRandomIndexForMain() {
  return Math.floor(Math.random() * mainDishes.length);
}
function getRandomIndexForDessert() {
  return Math.floor(Math.random() * desserts.length);
}
function showRecipe(){
  var mealString = '';
  recipeToBeShown.style.fontSize = "50px";
if (radSideDish.checked){
mealString = `${sideDishes[getRandomIndexForSide()]}!`;
}else if(radMainDish.checked){
  mealString = `${mainDishes[getRandomIndexForMain()]}!`;
}else if(radDesset.checked){
  mealString = `${desserts[getRandomIndexForDessert()]}!`;
}else if(radEntireMeal.checked){
  mealString = `${mainDishes[getRandomIndexForMain()]}, with a side of ${sideDishes[getRandomIndexForSide()]} and ${desserts[getRandomIndexForDessert()]} for dessert!`;
  recipeToBeShown.style.fontSize = "25px";
}
recipeToBeShown.innerHTML = mealString;
recipeContent.style.display = "block";
cookPotImage.style.display = "none";
clearButton.style.display = "block";


}
function hideRecipe(){
  recipeContent.style.display = "none";
  cookPotImage.style.display = "block";
  clearButton.style.display = "none";
}
letsCookButton.addEventListener("click", showRecipe);
clearButton.addEventListener("click",hideRecipe);
