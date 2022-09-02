const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    .catch(error => console.log(error))
}

const displayMeals = data =>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.textContent = '';
    const meals = data.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div');
    mealDiv.classList.add('col')
    mealDiv.innerHTML = `
    <div class="card h-100" onclick="loadDetails(${meal.idMeal})">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">
                    ${meal.strInstructions.slice(0,150)}
                  </p>
                </div>
              </div>
    `
    mealContainer.appendChild(mealDiv)
    })
}
const getSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = ''; 

    loadMeals(searchValue);
}

const loadDetails = (idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetailes(data.meals[0]))
}

const displayMealsDetailes = meal => {
console.log(meal)
const mealDetailContainer = document.getElementById('meal-details');
mealDetailContainer.textContent ='';
const mealDiv = document.createElement('div');
mealDiv.classList.add('card');
mealDiv.style.width ='100%'
mealDiv.innerHTML =`
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
`
mealDetailContainer.appendChild(mealDiv)
}
// loadMeals();