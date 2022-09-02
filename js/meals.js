const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = (meals) => {
    // console.log(meals)
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';

    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML =`
        <div onclick="loadMealsDetails(${meal.idMeal})" class="card h-100">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  ${meal.strInstructions.slice(0,200)}
                </p>
              </div>
            </div>
        `
        mealsContainer.appendChild(mealDiv);
    })
    }

// loadMeals('a');

document.getElementById('search-btn').addEventListener('click',function(){
  const mealsContainer = document.getElementById('meal-details');
    mealsContainer.textContent = '';

    const field = document.getElementById('input-field');
    const fieldValue = field.value;
    field.value = '';

    loadMeals(fieldValue);
})

const loadMealsDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetailes(data.meals[0]))
}

const displayMealsDetailes = (meal) => {
    console.log(meal)
    const mealsContainer = document.getElementById('meal-details');
    mealsContainer.textContent = '';

    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML =`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">
        ${meal.strInstructions}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealsContainer.appendChild(mealDiv)
}