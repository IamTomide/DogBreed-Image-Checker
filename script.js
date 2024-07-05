
const BREEDS = "https://dog.ceo/api/breeds/list/all";
const select = document.getElementById("dogs");
const spinner = document.querySelector(".spinner");
const img = document.querySelector(".dog-img");


fetch(BREEDS)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const breedsList = Object.keys(data.message);
        

        for(i=0; i<breedsList.length; i++) {
            const breed = breedsList[i];
            const option = document.createElement("option");
            option.innerText = breed;
            option.value = breed;
            select.appendChild(option);
        }

    })

function getDog(event) {
    spinner.classList.add("show");
    img.classList.remove("show");
    
    const selectedbreed = event.target.value;
    const dogurl = `https://dog.ceo/api/breed/${selectedbreed}/images/random`
    fetch(dogurl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data)  {
        img.src = data.message;
    })
}

img.addEventListener("load", function() {
    spinner.classList.remove("show");
    img.classList.add("show");
})

function displayDog() {
    select.addEventListener("change", getDog);
}

displayDog()