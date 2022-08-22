console.log("Let's get this party started!");

const userinput = document.querySelector("#userinput");
const form = document.querySelector("#form");
const gifArea = document.querySelector("#gif-area")

async function getGif(searchTerm){
let result = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
console.log("result", result);

let numResults = result.data.data.length;
console.log("numResults",numResults)

  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults)
    console.log("random index", randomIdx);

const gifURL = result.data.data[randomIdx].images.original.url;
console.log("gifURL", gifURL)

const newGif = document.createElement("img");
newGif.src = gifURL;
gifArea.append(newGif);

  }

}

form.addEventListener("submit", function(e){
    e.preventDefault();
    getGif(userinput.value);    
});

