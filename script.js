/////GLOBAL VARS

var enterButton = document.querySelector("enter-button");
var websiteTitle = document.querySelector("website-title");
var websiteURL = document.querySelector("website-url");

var linkCount = 0;
var readLinks = 0;
var unreadLinks = 0;

enterButton.addEventListener("click", function() {
  validateInput();
});

//////CONTRUCTOR FUNCTION

function WebsiteItem(title, url) {
  this.title = title;
  this.url = url;
}

WebsiteItem.prototype.close = function(){}

/////HELPER FUNCTIONS

function validateInput(){};

function clearReadBookmarks(){};
