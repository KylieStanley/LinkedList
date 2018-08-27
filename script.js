//BUTTON VARS
var enterButton = document.querySelector(".enter-button");

//USER INPUT VARS
var websiteTitle = document.querySelector(".website-title");
var websiteURL = document.querySelector(".website-url");

//BOOKMARK VARS
var results = document.querySelector(".results");
var bookmarks = document.querySelectorAll('.bookmark');

//COUNT VARS
var bookmarkCount = 0;
var readLinks = 0;
var unreadLinks = 0;


///EVENT LISTENERS

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


document.querySelector('.results').addEventListener('click', function(e) {
  console.log(e.target);
  
  if(e.target.classList.contains("delete-button")){
    results.removeChild(event.target.parentElement);
    bookmarkCount--;
  };
  if(e.target.classList.contains("read-button")){
    e.target.parentElement.classList.add("read");
  }
});

/////CREATE HTML FUNCTION

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
  bookmarkCount++;
}

/////HELPER FUNCTIONS

function clearReadBookmarks(){};
