const dynamicContent = document.getElementById("dynamic-text");
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
  document.querySelector(".downicon").addEventListener("click",scrollpage)
  function scrollpage(){

    document.documentElement.scrollBy(0,740);
  }

  const day = document.getElementById("day");
  const night = document.getElementById("night");
  var r = document.querySelector(':root');

  day.addEventListener("click",daymode)
  night.addEventListener("click",nightmode)
  
  function daymode(){
    r.style.setProperty("--bg-color","#ffffff")
    r.style.setProperty("--text-color","black")
    r.style.setProperty("--shadow-box-background","#ffffff")
    r.style.setProperty("--shadow-box-box-shadow","5px 5px 16px #737373,-5px -5px 16px #ffffff")
    r.style.setProperty("--box-shadow-hover","5px 5px 16px #fb6c6d,-5px -5px 16px #ffffff")
    r.style.setProperty("--day-icon","none")
    r.style.setProperty("--night-icon","revert")
  }
  function nightmode(){
    r.style.setProperty("--bg-color","#232325")
    r.style.setProperty("--text-color","white")
    r.style.setProperty("--shadow-box-background","#232325")
    r.style.setProperty("--shadow-box-box-shadow","5px 5px 16px #101011,-5px -5px 16px #363639")
    r.style.setProperty("--box-shadow-hover","5px 5px 16px #fb6c6d,-5px -5px 16px #363639")
    r.style.setProperty("--day-icon","revert")
    r.style.setProperty("--night-icon","none")
  }
});
