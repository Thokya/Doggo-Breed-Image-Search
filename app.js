const form = document.querySelector('form');
const input = document.querySelector('#searchTerm');
const resultsSection = document.querySelector('#results');
// const loading = document.querySelector(".loading-img");
const imageSection = document.querySelector('.image-section');

const API_URL = 'https://dog.ceo/api/breed/';

// loading.style.display = 'none';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();
    const searchTerm = input.value;
    getResults(searchTerm);
    // loading.style.display = '';
}

function getResults(searchTerm) {
    const url = `${API_URL}${searchTerm}/images`;
    fetch(url)
        .then(response => response.json())
        .then(data => showResults(data.message));
}

function showResults(results) {
    // console.log(results);
    // const resultImg = document.createElement("img");
    // resultImg.src = results;
    results.forEach(dog => {
        console.log(dog);
        const imageResult = document.createElement('img');
        imageResult.src = dog;
        imageSection.appendChild(imageResult);
    });
}