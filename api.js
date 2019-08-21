const baseURL = "https://api.edamam.com/search"; //1
const key = '5037af3e4c770201729aa03275f921c8'	;
const appId  = '9cdb89be';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');  
const submitBtn = document.querySelector('.submit');
const setTable = document.querySelector('.onTable');
const providedBy = document.querySelector('#providedBy');
const toFoodURL = document.querySelector('a');
// Next Button Mod
// const nextBtn = document.quereySelector('.whatElse');

searchForm.addEventListener('submit', fetchResults);

    function fetchResults(e) {
        e.preventDefault();
        console.log(e); 
        url = baseURL + "?q=" + searchTerm.value + '&app_id='+ appId + "&app_key=" + key;
        console.log(url);
                
    fetch(url)
    .then(function(results){
        return results.json();
    }) .then(function(json){
        console.log(json);
        
        
    let hungryFor = json.hits[0].recipe.label;
    let recipeURL = json.hits[0].recipe.url;
    let imgFood = json.hits[0].recipe.image;
    let sourceBy = json.hits[0].recipe.source;


    console.log(`Heres ${hungryFor} by ${sourceBy}.  Find the recipe at ${recipeURL}`);   

    let img = document.createElement('img');
    let source = document.createElement('span');
    let link = document.createElement('a');
        linkText = document.createTextNode('  Show me the Food Mats!');
        link.href = recipeURL;
        link.target = '_blank';
        link.appendChild(linkText);

        // Next Button Mod
    // let anotherDish = document.createElement('button');
    //     anotherDish.type = 'submit';
    //     anotherDishText = document.createTextNode('Maybe Something Else?');
    
        
    // Results Build
    let suggestDish = document.getElementById('onTable');
        suggestDish.innerText = `Might I suggest the ${hungryFor}?`;

        setTable.appendChild(img);
        img.src = imgFood;

        providedBy.appendChild(source);
        source.innerText = `Recipe provided by ${sourceBy}.`;
        providedBy.appendChild(document.createElement('br'));
        providedBy.appendChild(link);
        
        // Next Button Mod
        
        // nextBtn.addEventListener('click', nextDish);
        // nextBtn.appendChild(nextDish);

        // function nextDish(e) {
        //     fetchResults(e);
        //     console.log("Next Recipe: ", );

        //     while(setTable.firstChild && providedBy.firstChild)
        //         setTable.removeChild(setTable.firstChild) && providedBy.removeChild(providedBy.firstChild);
        // }
        //  if (let i = 0; i >= hungryFor[0]; i++)
        // let hungryFor = json.hits[0].recipe.label;
        // let recipeURL = json.hits[0].recipe.url;
        // let imgFood = json.hits[0].recipe.image;
        // let sourceBy = json.hits[0].recipe.source;


    })


}


    


