//BUTTON VARS
var enterButton = document.querySelector(".enter-button");
var clearButton = document.querySelector(".clear-button");

//USER INPUT VARS
var websiteTitle = document.querySelector(".website-title");
var websiteURL = document.querySelector(".website-url");

//BOOKMARK VARS
var results = document.querySelector(".results");

//COUNT VARS
var bookmarkCount = 1;
var readLinks = document.querySelectorAll(".read").length;
var unreadLinks = bookmarkCount - readLinks;

///EVENT LISTENERS

websiteTitle.addEventListener("keyup", disableEnterButtonCheck);
websiteURL.addEventListener("keyup", disableEnterButtonCheck);

enterButton.addEventListener("click", createHTML);
clearButton.addEventListener("click", clearReadBookmarks);

results.addEventListener("click", function(e) {
  if(e.target.classList.contains("delete-button")){
    results.removeChild(e.target.parentElement);
    bookmarkCount--;
    updateStats();
  };
  if(e.target.classList.contains("read-button")){
    e.target.parentElement.classList.toggle("read");
    updateStats();
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
  updateStats();
}

/////OTHER FUNCTIONS

function clearReadBookmarks(){
  var readBookmarks = document.getElementsByClassName("read");
    while(readBookmarks.length > 0){
      readBookmarks[0].parentNode.removeChild(readBookmarks[0]);
    }
};

function disableEnterButtonCheck(){
  if (websiteTitle.value.length === 0 || websiteURL.value.length === 0) {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
}

function updateStats(){
  readLinks = document.querySelectorAll(".read").length;
  unreadLinks = bookmarkCount - readLinks;
  document.getElementById("bookmarks").innerHTML = `Bookmarks: ${bookmarkCount}`;
  document.getElementById("read").innerHTML = `Read: ${readLinks}`;
  document.getElementById("unread").innerHTML = `Unread: ${unreadLinks}`;
}