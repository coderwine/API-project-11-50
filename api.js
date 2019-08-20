const baseURL = "https://api.edamam.com/search"; //1
const key = '5037af3e4c770201729aa03275f921c8'	;
const appId  = '9cdb89be';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');  
const submitBtn = document.querySelector('.submit');
const setTable = document.querySelector('.onTable');

searchForm.addEventListener('submit', fetchResults);



// Not pulling up results when I input a searchTerm.value.  An array is being pulled when I hardcode a value within the ?q=...
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
    console.log(hungryFor);   
    });


    let plate = document.getElementById('onTable');
        plate.innerText = 'stuff being noted';
        inputField.appendChild(plate);

}
