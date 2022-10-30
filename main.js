import projects from './projects.json' assert {type: 'json'};
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
printletters(phrases[phraseIndex]);

//Search Function projects related things

const options = document.querySelectorAll(".option")
const container = document.querySelector(".cards-container")
let allprojects = "";
options.forEach(option =>{
    option.addEventListener("click",()=>{
        console.log(option);
    })
})
function projecttags(tags){
    let valuetags ="";
    tags.forEach(tag=>{
        let singletag = `<p>${tag}</p>`
        valuetags += singletag
    })
    return valuetags
}

const onscroll = (e) => {
  console.log(e);
}
function showmenu() {
  const menu = document.querySelector("section.menu");
  menu.style.height = "100%";
  menu.style.width = "100%";
}
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
function scrolltop(){
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; //for chrome windows
}
function scrollpage(){
  document.getElementById("about-me").scrollIntoView();
}
function showheader(e){
  if(document.documentElement.scrollTop > 700){
    const headerElement = document.querySelector("header")
    const headerlinks = document.querySelectorAll("header a")
    headerElement.style.setProperty("background-color","rgba(var(--accent-color),.9)")
    headerlinks.forEach(link => {
      link.style.setProperty("color","white")
    })
  }else{
    const headerElement = document.querySelector("header")
    const headerlinks = document.querySelectorAll("header a")
    headerElement.style.setProperty("background-color","revert")
    headerElement.style.setProperty("transition","all ease-in .5s")
    headerlinks.forEach(link => {
      link.style.setProperty("color","var(--text-color)")
    })
  }
}

document.addEventListener("DOMContentLoaded",() => {
  document.getElementById("menu-btn").addEventListener("click", showmenu);
  document.getElementById("close-btn").addEventListener("click", closemenu);
  addclickToMenuItems();
  document.querySelector(".logo").addEventListener("click",scrolltop)
  document.querySelector(".downicon").addEventListener("click",scrollpage)
  
  window.addEventListener("scroll",(e)=>showheader(e))
  const day = document.getElementById("day");
  const night = document.getElementById("night");
  var r = document.querySelector(':root');

  day.addEventListener("click",daymode)
  night.addEventListener("click",nightmode)
  
  function daymode(){
    r.style.setProperty("--bg-color","rgb(240, 240, 240)")
    r.style.setProperty("--text-color","rgb(0, 0, 0)")
    r.style.setProperty("--accent-color","100, 85, 255")
    r.style.setProperty("--secondary-text-color","rgba(0, 0, 0, 0.75)")
    r.style.setProperty("--card-bg","rgb(250, 250, 250)")
    r.style.setProperty("--day-icon","none")
    r.style.setProperty("--night-icon","revert")
  }
  function nightmode(){
    r.style.setProperty("--bg-color","rgba(0,0,0,.9)")
    r.style.setProperty("--text-color","rgb(255, 255, 255)")
    r.style.setProperty("--accent-color","100, 85, 255")
    r.style.setProperty("--secondary-text-color","hsla(0,0%,100%,.75")
    r.style.setProperty("--card-bg","#282828")
    r.style.setProperty("--day-icon","revert")
    r.style.setProperty("--night-icon","none")
  }

  //serach fcuntion
  projects.forEach(project => {
    const contain = 
    `<div class="card" id="project-card">
    <img src="${project.projectimg}">
    <h3>${project.projectname}</h3>
    <p class="project-para">${project.description}</p>
    <div class="tags">${projecttags(project.tags)}</div>
    <div class="project-buttons">
        <button class="githubbtn"><a href="${project.githublink}" target="_blank"><i class="fa-brands fa-github"></i>Github</a></button>
        <button class="livebtn"><a href="${project.livelink}" target="_blank"><i class="fa-solid fa-globe"></i>live</a></button>
    </div>
    </div>`
    
    allprojects += contain
    container.innerHTML += contain
    });
    options.forEach((option) =>{
      option.addEventListener("click",(e)=>{

          options.forEach(opt =>{
              opt.classList.remove("selectedoption")
              opt.classList.add("notselectedoption")
          })
          const tagvalue =e.target.innerHTML;
          container.innerHTML = ""
          e.target.classList.remove("notselectedoption")
          e.target.classList.add("selectedoption")
          projects.forEach(project => {
              project.tags.forEach(tag =>{
                  if(tag === tagvalue){
                      const contain = 
                                      `<div class="card" id="project-card">
                                      <img src="${project.projectimg}">
                                      <h3>${project.projectname}</h3>
                                      <p class="project-para">${project.description}</p>
                                      <div class="tags">${projecttags(project.tags)}</div>
                                      <div class="project-buttons">
                                          <button class="githubbtn"><a href="${project.githublink}" target="_blank"><i class="fa-brands fa-github"></i>Github</a></button>
                                          <button class="livebtn"><a href="${project.livelink}" target="_blank"><i class="fa-solid fa-globe"></i>live</a></button>
                                      </div>
                                      </div>`
                                      container.innerHTML += contain
                  }else if(tagvalue === "ALL"){
                      container.innerHTML = allprojects;
                  }
              })
          })
      })
    })


});
