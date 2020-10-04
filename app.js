const form = document.querySelector('form');
const input = document.querySelector('#searchTerm');
const resultsSection = document.querySelector('#results');
// const loading = document.querySelector(".loading-img");
const imageSection = document.querySelector('.image-section');

const API_URL='https://dog.ceo/api/breed';

//const API_URL = 'https://dog.ceo/api/breed';
//https://dog.ceo/api/breeds/image/random
// loading.style.display = 'none';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
	console.log("clicked");
    event.preventDefault();
    const searchTerm = input.value;
    getResults(searchTerm);
}

function getResults(searchTerm) {
    //const url = `${API_URL}${searchTerm}/images`;
    //https://dog.ceo/api/breed/hound/images/random
    const url = `${API_URL}/${searchTerm}/images`;
 
	fetch(url)
	.then(response => response.json())
	.then(response => {

	    console.log(response.message)
	    showResults(response.message)

});
}

function showResults(results) {
     console.log(typeof results);
     var element = document.getElementById("results");
     const resultImg = document.createElement("img");

     results.forEach(dog => {
         console.log(dog);
          src = dog;

          imageSection.appendChild(imageResult);
          var elem = document.createElement("img");
    	  elem.setAttribute("src", src);
      	  elem.setAttribute("height", "150");
      	  elem.setAttribute("width", "150");
      	  document.getElementById("results").appendChild(elem);
     });
}