const seachProduct=()=>{
    const search=document.getElementById('seach');
    const seachText=search.value;
    search.value=''
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${seachText}`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>totalMeals(data.meals))
}

const totalMeals=meals=>{
    const productContainer=document.getElementById('productContainer');
    productContainer.innerText=''
    // console.log(meals);
    meals.forEach(meal => {
        console.log(meal.strMeal)
        const div=document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div class="col">
          <div class="card">
            <img weidth="100px" height="300px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        `
        productContainer.appendChild(div)
    });
}