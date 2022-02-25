const seachProduct=()=>{
    const search=document.getElementById('seach');
    const seachText=search.value;
    search.value=''
    if(seachText==''){
      const emtySearch=document.getElementById('emtySearch');
      emtySearch.innerText=''
      const h2=document.createElement('h2');
      h2.innerHTML=`<h2>please type a product</h2>`
      emtySearch.appendChild(h2)
    }else{
      const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${seachText}`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>totalMeals(data.meals))
    emtySearch.innerText=''
    }
}

const totalMeals=meals=>{
    const productContainer=document.getElementById('productContainer');
    productContainer.innerHTML=''
    // console.log(meals);
    meals.forEach(meal => {
        // console.log(meal.idMeal)
        const div=document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div class="col">
          <div onclick="mealDetails('${meal.idMeal}')" class="card">
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

const mealDetails=mealId=>{
  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>showMealDetails(data))
}
const showMealDetails=Id=>{
  console.log(Id.meals[0].strYoutube)
  const porductDetails=document.getElementById('porductDetails');
  porductDetails.innerHTML=''
  const div=document.createElement('div');
  div.classList.add('card')
  div.innerHTML=`
    <div class="card">
            <img src="${Id.meals[0].strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Name : ${Id.meals[0].strMeal}</h5>
              <p class="card-text">ID :${Id.meals[0].idMeal}</p>
              <p class="card-text">${Id.meals[0].strInstructions.slice(0,150)}</p>
              <a href="${Id.meals[0].strYoutube}" class="btn btn-primary">Go video</a>
            </div>
          </div>
  `
  porductDetails.appendChild(div)
}