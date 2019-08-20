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

searchForm.addEventListener('submit', fetchResults);

    function fetchResults(e) {
        e.preventDefault();
        console.log(e); 
        // url = baseURL + "?q=potato" + '&app_id='+ appId + "&app_key=" + key;
        url = baseURL + "?q=" + searchTerm.value + '&app_id='+ appId + "&app_key=" + key;
        console.log(url);
                
    fetch(url)
    .then(function(results){
        return results.json();
    }) .then(function(json){
        console.log(json);
        // displayResults(json);
        
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
        link.appendChild(linkText);
        
    // Results Build
    let suggestDish = document.getElementById('onTable');
        suggestDish.innerText = `Might I suggest the ${hungryFor}?`;

        setTable.appendChild(img);
        img.src = imgFood;

        providedBy.appendChild(source);
        source.innerText = `Recipe provided by ${sourceBy}.`;
        providedBy.appendChild(link);
   

    });


    
}

