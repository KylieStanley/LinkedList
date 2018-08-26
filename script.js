/////GLOBAL VARS

var enterButton = document.querySelector(".enter-button");
var websiteTitle = document.querySelector(".website-title");
var websiteURL = document.querySelector(".website-url");
var results = document.querySelector(".results");
var deleteButton = document.querySelectorAll(".delete-button");
var bookmarks = document.querySelectorAll('.bookmark');


var bookmarkCount = 0;

var linkCount = 0;
var readLinks = 0;
var unreadLinks = 0;

enterButton.addEventListener("click", function() {
  bookmarkCount++;
  createHTML();
});

//////CONTRUCTOR FUNCTION

/////CREATEHTMLFUNCTION

function createHTML(){
  var displayTitle = websiteTitle.value;
  var displayWebAddress = websiteURL.value;
  results.insertAdjacentHTML("beforeend", 
  `<article class ="bookmark bookmark${bookmarkCount}">
  <h2>${displayTitle}</h2>
  <hr>
  <a class="website-link" href="${displayWebAddress}">${displayWebAddress}</a>
  <hr>
  <button class="read-button">Read</button>
  <button class="delete-button deleteButton${bookmarkCount}">Delete</button>
 </article>`)
  deleteButton = document.querySelectorAll(".delete-button");
  bookmarks = document.querySelectorAll('.bookmark');
  deleteButton[bookmarkCount].addEventListener('click', function() {
    results.removeChild(event.target.parentElement);
    bookmarkCount--;
  })
}

/////HELPER FUNCTIONS

function validateInput(){};

function clearReadBookmarks(){};
