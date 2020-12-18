// let resumeButton = document.getElementById("resumeButton");
// resumeButton.addEventListener("click", downloadPDF);

// function downloadPDF() {
//     window.open(
//         "./assets/dRobieResume2020.pdf/", "_blank"); 
// }
let card1 = document.getElementById("card1");
card1.addEventListener("click", card1Open);

function card1Open() { 
    window.open( 
      "https://codepen.io/davisonrobie/full/xxOQvYx/", "_blank"); 
}

let card2 = document.getElementById("card2");
card2.addEventListener("click", card2Open);

function card2Open() { 
    window.open( 
      "https://randompicturegallery.web.app/", "_blank"); 
}

let card3 = document.getElementById("card3");
card3.addEventListener("click", card3Open);

function card3Open() { 
    window.open( 
      "https://davison-robie.github.io/staticLayoutProject/", "_blank"); 
}

let gitHub = document.getElementById("gitHubButton");
gitHub.addEventListener("click", gitHubOpen);

function gitHubOpen() { 
    window.open( 
        "https://github.com/davison-robie", "_blank"); 
}

let linkedIn = document.getElementById("linkedInButton");
linkedIn.addEventListener("click", linkedInOpen);

function linkedInOpen() { 
    window.open( 
        "https://www.linkedin.com/in/davison-robie-42092a6a/", "_blank"); 
}