//BUTTON VARS
var enterButton = document.querySelector(".enter-button");
var clearButton = document.querySelector(".clear-button");
var errorMessage = document.querySelector(".wrong-password-notification");

//USER INPUT VARS
var websiteTitleInput = document.querySelector(".website-title");
var websiteUrlInput = document.querySelector(".website-url");

//BOOKMARK VAR
var results = document.querySelector(".results");

//COUNT VARS
var bookmarkCount = 1;
var readLinks = document.querySelectorAll(".read").length;
var unreadLinks = bookmarkCount - readLinks;

///EVENT LISTENERS

websiteTitleInput.addEventListener("keyup", disableEnterButtonCheck);
websiteUrlInput.addEventListener("keyup", function() {
  disableEnterButtonCheck();
  validateURL(websiteUrlInput.value) ? errorMessage.classList.remove("display-error") : errorMessage.classList.add("display-error");
  });

enterButton.addEventListener("click", createHTML);
clearButton.addEventListener("click", clearReadBookmarks);

results.addEventListener("click", function(e) {
  if(e.target.classList.contains("delete-button")) {
    results.removeChild(e.target.parentElement);
    bookmarkCount--;
    updateStats();
  };
  if(e.target.classList.contains("read-button")) {
    e.target.parentElement.classList.toggle("read");
    updateStats();
  }
});

/////CREATE HTML FUNCTION

function createHTML(){
  event.preventDefault();
  var displayTitle = websiteTitleInput.value;
  var displayWebAddress = websiteUrlInput.value;
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
  websiteUrlInput.value = "";
  websiteTitleInput.value = "";
  disableEnterButtonCheck()
}

/////OTHER FUNCTIONS

function clearReadBookmarks(){
  var readBookmarks = document.getElementsByClassName("read");
    while(readBookmarks.length > 0){
      readBookmarks[0].parentNode.removeChild(readBookmarks[0])
      bookmarkCount--;
    }
    updateStats();
};

function disableEnterButtonCheck(){
    enterButton.disabled = websiteTitleInput.value.length === 0 || !validateURL(websiteUrlInput.value);
}

function updateStats(){
  readLinks = document.querySelectorAll(".read").length;
  unreadLinks = bookmarkCount - readLinks;
  document.getElementById("bookmark-count").innerHTML = ` ${bookmarkCount}`;
  document.getElementById("read-count").innerHTML = ` ${readLinks}`;
  document.getElementById("unread-count").innerHTML = ` ${unreadLinks}`;
}

function validateURL(thisUrl) {
  var check = new RegExp("https?:\/\/www\.")
  return check.test(thisUrl);
}
