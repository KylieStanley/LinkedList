/////GLOBAL VARS

//Button variables
var enterButton = document.querySelector(".enter-button");
var readButton = document.querySelectorAll(".read-button");
var deleteButton = document.querySelectorAll(".delete-button");

//Input variables
var websiteTitle = document.querySelector(".website-title");
var websiteURL = document.querySelector(".website-url");

//Bookmark variables
var results = document.querySelector(".results");
var bookmarks = document.querySelectorAll('.bookmark');

var bookmarkCount = 0;

var linkCount = 0;
var readLinks = 0;
var unreadLinks = 0;


websiteTitle.addEventListener('keyup', function() {
  if (websiteTitle.value.length === 0 || websiteURL.value.length === 0) {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
})

websiteURL.addEventListener('keyup', function() {
  if (websiteTitle.value.length === 0 || websiteURL.value.length === 0) {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
})

enterButton.addEventListener("click", function() {
  bookmarkCount++;
  createHTML();
});

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
  <a class="read-button">Read</a>
  <a class="delete-button deleteButton${bookmarkCount}">Delete</a>
 </article>`)
  bookmarks = document.querySelectorAll('.bookmark');
  updateDeleteAndReadButtons();  
}


function updateDeleteAndReadButtons() {
  deleteButton = document.querySelectorAll(".delete-button");
  deleteButton[bookmarkCount].addEventListener('click', function() {
    results.removeChild(event.target.parentElement);
    bookmarkCount--;
  })
  
  readButton = document.querySelectorAll(".read-button");
  readButton[bookmarkCount].addEventListener('click', function() {
    bookmarks[bookmarkCount].classList.toggle('read');
    console.log(bookmarks[bookmarkCount]);

});
  
}

/////HELPER FUNCTIONS

function validateInput(){};

function clearReadBookmarks(){};
