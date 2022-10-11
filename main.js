const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent);
console.log("helloooo");
const phrases = ["Software Engineer...", "WebDeveloper..."];
let phraseIndex = 0;
let letterIndex = 0;

const typingspeed = 250;
const clearingspeed = 150;

function printletters(phrase) {
  if (letterIndex == phrase.length) {
    clearLetters();
  } else if (letterIndex < phrase.length) {
    dynamicContent.textContent += phrase.charAt(letterIndex);

    letterIndex += 1;
    setTimeout(function () {
      printletters(phrase);
    }, typingspeed);
  }
}

function clearLetters() {
  if (letterIndex == -1) {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    letterIndex = 0;
    printletters(phrases[phraseIndex]);
  } else if (letterIndex > -1) {
    let updatedPhrase = "";
    for (let index = 0; index < letterIndex; index++) {
      updatedPhrase += phrases[phraseIndex].charAt(index);
    }
    dynamicContent.textContent = updatedPhrase;
    letterIndex -= 1;
    setTimeout(clearLetters, clearingspeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-btn").addEventListener("click", showmenu);

  function showmenu() {
    const menu = document.querySelector("section.menu");
    menu.style.height = "100%";
    menu.style.width = "100%";
  }

  document.getElementById("close-btn").addEventListener("click", closemenu);

  function closemenu() {
    const menu = document.querySelector("section.menu");
    menu.style.height = "0%";
  }
  function addclickToMenuItems() {
    const menuItems = document.querySelectorAll("section.menu nav ul>li");
    for (let menuItem of menuItems) {
      menuItem.addEventListener("click", closemenu);
    }
  }
  addclickToMenuItems();

  document.querySelector(".logo").addEventListener("click",scrolltop)
  function scrolltop(){
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for chrome windows
  }
  document.querySelector(".scroll-btn").addEventListener("click",scrollpage)
  function scrollpage(){
    console.log("scscsc")
    document.documentElement.scrollBy(0,1000);
  }
});

printletters(phrases[phraseIndex]);
