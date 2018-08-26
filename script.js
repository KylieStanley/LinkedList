/////GLOBAL VARS

var enterButton = document.querySelector(".enter-button");
var websiteTitle = document.querySelector(".website-title");
var websiteURL = document.querySelector(".website-url");
var results = document.querySelector(".results");

var linkCount = 0;
var readLinks = 0;
var unreadLinks = 0;

enterButton.addEventListener("click", function() {
  createHTML();
});

//////CONTRUCTOR FUNCTION

/////CREATEHTMLFUNCTION

function createHTML(){
  var displayTitle = websiteTitle.value;
  var displayWebAddress = websiteURL.value;
  results.insertAdjacentHTML("beforeend", 
  `<article class ="bookmark">
  <h2>${displayTitle}</h2>
  <hr>
  <a class="website-link" href="${displayWebAddress}">${displayWebAddress}</a>
  <hr>
  <button class="read-button">Read</button>
  <button class="delete-button">Delete</button>
 </article>`)
}

/////HELPER FUNCTIONS

function validateInput(){};

function clearReadBookmarks(){};
