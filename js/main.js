// check if theres local storage color option 
let mainColors = localStorage.getItem('color_option');
// check if theres local storage bulletLocalItem option 
let bulletLocalItem = localStorage.getItem("bullets_option");
// check if there's local Storage Random Background Item 
 let backGroundLocalItem = localStorage.getItem("background_option"); 
 // check if there's  local storage darkmood
 let DarkMood = localStorage.getItem("Dark_Mode"); 
 let landingPage = document.querySelector(".landing-page");
//=================================================================================================
if (mainColors !== null) {
/*   console.log('local storage is not Empty You Can Set On Root Now');
  console.log(localStorage.getItem('color_option')); */
  document.documentElement.style.setProperty("--main-color", mainColors);
    // Remove Active Class From All Colors List Items 
    document.querySelectorAll(".colors-list li").forEach(Element => {
      Element.classList.remove('active');
      // Add Active Class On Elemnt With Data Color === Local Storage Item 
       if (Element.dataset.color === mainColors) {
       // Add active class
       Element.classList.add('active');
      };
    });
};
//=================================================================================================
// local-storge photo-list and li move between photo

const storgePhoto = localStorage.getItem('option-photo');
const storgeLanding = localStorage.getItem('option-landing');
if (storgeLanding !== null) {
  landingPage.style.backgroundImage = storgeLanding;
  console.log(storgeLanding);
};
if (storgePhoto !== null) {

  document.querySelectorAll('.photo-list li').forEach(active => {
      active.classList.remove('active');

      if (active.dataset.photo === storgePhoto) {

          active.classList.add('active')
      }
  })

}
   // Select List-photo li 
   const photoLi  = document.querySelectorAll('.photo-list li');
   // remove class active and class active when clicked 
   photoLi.forEach(li => {
     li.addEventListener('click', function (e) {
       handleActive(e);
       // change image when clcik li 
       let choseImg = e.target.dataset.photo;
       if (e.target.dataset.photo == 0) {
         landingPage.style.backgroundImage = 'url("img/' + imgArray[0] + '")'
         localStorage.setItem('option-landing', landingPage.style.backgroundImage = 'url("img/' + imgArray[0] + '")')
       } else if (e.target.dataset.photo == 1) {
        landingPage.style.backgroundImage = 'url("img/' + imgArray[1] + '")'
        localStorage.setItem('option-landing', landingPage.style.backgroundImage = 'url("img/' + imgArray[1] + '")')
       } else if (e.target.dataset.photo == 2) {
        landingPage.style.backgroundImage = 'url("img/' + imgArray[2] + '")'
        localStorage.setItem('option-landing', landingPage.style.backgroundImage = 'url("img/' + imgArray[2] + '")')
       } else if (e.target.dataset.photo == 3) {
        landingPage.style.backgroundImage = 'url("img/' + imgArray[3] + '")'
        localStorage.setItem('option-landing', landingPage.style.backgroundImage = 'url("img/' + imgArray[3] + '")')
       } else if (e.target.dataset.photo == 4) {
         landingPage.style.backgroundImage = 'url("img/' + imgArray[4] + '")'
         localStorage.setItem('option-landing', landingPage.style.backgroundImage = 'url("img/' + imgArray[4] + '")')
        } else if (e.target.dataset.photo == 5) {
          landingPage.style.backgroundImage = 'url("img/' + imgArray[5] + '")'
          localStorage.setItem('option-landing', landingPage.style.backgroundImage = 'url("img/' + imgArray[5] + '")')
       
       };

       localStorage.setItem('option-photo', choseImg);
       });
       });

   // Random BackGround Option 
   let backgroundOption = true;
   // variable to control the background interval 
   let backgroundInterval;

// check id random backgrond local storage is not Empty 
/* if (backGroundLocalItem !== null ) {
  if (backGroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;    
  }
 
  document.querySelectorAll(".random-back span").forEach(Element => {
    Element.classList.remove("active");
  });
  if (backGroundLocalItem === 'true') {
    document.querySelector(".random-back .yes").classList.add("active");
  } else {
    document.querySelector(".random-back .no").classList.add("active");
  } 
}
 */
const backGroundLoca = localStorage.getItem('option-backgound');

if (backGroundLoca !== null) {
    document.querySelectorAll('.random-back span').forEach(e => {
        e.classList.remove('active')
    });
    if (backGroundLoca === 'true') {
      backgroundOption = true;
        document.querySelector('.random-back .yes').classList.add('active');
    } else {
      backgroundOption = false;
        document.querySelector('.random-back .no').classList.add('active');
    }


}

// Toggle Span Class On Icon
/* let toogleBox = document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  // toggle class fa-spin for Rotation on self
   this.classList.toggle('open');  

// Toggle class Open On Main Setting Box
   document.querySelector(".setting-box").classList.toggle('open');

   document.addEventListener('click', function(event) {
    !event.target.closest('.setting-box') && SettingBox.classList.contains('open') && menu.classList.remove('open');
  });
   
};  */

// anther code .......!!
/* 
 let SettingBox = document.querySelector(".setting-box");
let toogleSett = document.querySelector(".toggle-setting .fa-gear");

Body.addEventListener('click', function() {
  SettingBox.classList.remove('open');
});

document.addEventListener('click', function(event) {
  !event.target.closest('.setting-box') && SettingBox.classList.contains('open') && menu.classList.remove('open');
});   */


// Switch Colors 
const colorsLi = document.querySelectorAll(".colors-list li");
// loop On All List Items
colorsLi.forEach(li => {
  // click on every list items
  li.addEventListener("click", (e) => {
    // set color On Root 
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    // Set Color On Local Storage 
    localStorage.setItem("color_option", e.target.dataset.color);
    // Remove Active Class From All spans 
    // add Active Class On target self 
    handleActive(e);

  });

});

// Switch random background option 
const randomBackground = document.querySelectorAll(".random-back span");
// loop On all spans
randomBackground.forEach(span => {
  // click on every span
  span.addEventListener("click", (e) => {
    // Remove Active Class From All spans 
    // add Active Class On target self 
      handleActive(e);

     if (e.target.dataset.background === 'yes') {
      backgroundOption = true;
      landingPage.style.backgroundImage ='url("img/' + imgArray[0] + '")'
      randomizeImg();

      localStorage.setItem("background_option", true);
     } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);
     
     };
  });
});

// select landing page Element 
/* let landingPage = document.querySelector(".landing-page"); */

// Get Array Of Imgs 
  const imgArray = ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg"];

 // function to randomize imgs 
 function randomizeImg() {
   if (backgroundOption === true) {
   backgroundInterval =  setInterval(() => { // es6
      // get random number 
       let randomNumber = Math.floor(Math.random() * imgArray.length);
     // change background url 
     landingPage.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")';
   }, 10000);
   }
 };

 randomizeImg();



 // Handel Active State 
 function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(Element => {

    Element.classList.remove('active');
  });

  // add Active Class On self 
  ev.target.classList.add("active");
 };

 // select skills selector 

 let ourSkills = document.querySelector('.skills');

 window.onscroll = function () {

    // skills offset Top 
    let skillsOffsetTop = ourSkills.offsetTop;
 
  // Skills Outer Heigth 

  let skillsOuterHeight = ourSkills.offsetHeight;

  //window Height 
  let windowHeight = this.innerHeight;

  // window scrollTop 
  let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

     let allSkills = document.querySelectorAll('.skill-box .skill-progress span');

     allSkills.forEach(skill => {


      skill.style.width = skill.dataset.progress; 
     });

    }

 };

  // select second skills selector 

/*   let ourSkills2 = document.querySelector('.skills-2');

  window.onscroll = function () {
 
     // skills offset Top 
     let skillsOffsetTop = ourSkills2.offsetTop;
  
   // Skills Outer Heigth 
 
   let skillsOuterHeight = ourSkills2.offsetHeight;
 
   //window Height 
   let windowHeight = this.innerHeight;
 
   // window scrollTop 
   let windowScrollTop = this.pageYOffset;
 
     if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
 
      let allSkills = document.querySelectorAll('.progress .progress-bar span');
 
      allSkills.forEach(skill => {
 
 
       skill.style.width = skill.dataset.progress; 
      });
 
     }
 
  };
 */

 // Create PopUp With THe Image 

 let ourGallery = document.querySelectorAll(".gallery img");

 ourGallery.forEach(img => {

 
    img.addEventListener('click', (e) => {

      // Creat overlay Element 
      let overlay = document.createElement("div"); 

      // Add class to overlay 
      overlay.className = 'popup-overlay';

      // Append overlay to the Body 
      document.body.appendChild(overlay);

     // Creat the Popup
     let popupBox = document.createElement("div");

     //Add Class the popup box
     popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // create Heading 
      let imgHeading = document.createElement('h3');

      // Create Text IN Heading 
     let imgText = document.createTextNode(img.alt);

     // Apeend the text To Heading 
     imgHeading.appendChild(imgText);

     // append the heading to the poppu box 
     popupBox.appendChild(imgHeading);
    }

     // Creat The Image 
     let popupImg = document.createElement("img");

     // Set Img source
     popupImg.src = img.src;

     // Add Image To PopUp Box 
      popupBox.appendChild(popupImg);

    // Append THe popUp Box To Body 

    document.body.appendChild(popupBox);

    // Create The Close Span 
    let closBtn = document.createElement('span');

    // Creat The Close Button Text 
    let btnTxt = document.createTextNode("X");

    // Apeend text to close button 
    closBtn.appendChild(btnTxt);

    // Add class to the close button 
    closBtn.className = 'close-button';

    // Add Close Button to popupbox
    popupBox.appendChild(closBtn);
    });
 });
 // Close PopUp 

 document.addEventListener("click", (e) => {


  if (e.target.classList == 'close-button') {

    // Remove The Current PopUp 
    e.target.parentNode.remove();

    // Remove OverLay
    document.querySelector('.popup-overlay').remove();

  }

 });

 // Select All Bullets
 const allBullets = document.querySelectorAll('.nav-bullets .bullet');

/*  allBullets.forEach(bullet => {

  bullet.addEventListener("click", (e) => {

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'
    });

  }); 
 }); */

 // Select All links
 const alllinks = document.querySelectorAll('.links a');
 function scrollTo(sections) {
  sections.forEach(section => {
    section.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      });
    }); 
   });
 }

 scrollTo(allBullets);
 scrollTo(alllinks);

 // show and hide bulltes option 
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletSpan = document.querySelectorAll(".bullets-option span");


if (bulletLocalItem !== null) {

bulletSpan.forEach(span => {

    span.classList.remove('active');
});

  if (bulletLocalItem === 'block'){

    bulletsContainer.style.display = 'block';
    
    document.querySelector(".bullets-option .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");


  }
};

 bulletSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';

      localStorage.setItem("bullets_option", 'block');

    } else {

      bulletsContainer.style.display = 'none';

      localStorage.setItem("bullets_option", 'none');

    }

    handleActive(e);

  });
 });

 // Reset Button 

/*  document.querySelector(".reset-option").onclick = function () {

    localStorage.clear();
    window.location.reload();
 }; */

/* var event = new MouseEvent('onclick', {
  'view': window,
  'bubbles': true,
  'cancelable': true
});
document.querySelector(".reset-option").onclick = function () {

  localStorage.clear();
  window.location.reload();
};
var cc=document.querySelector(".reset-option");
cc.addEventListener('click' ,function() {
  
  alert('you will reset all option');
}); */

document.querySelector(".reset-option").onclick = function () {
  
  swal.fire({
    title: "OOPS !",
    text: "You Want To Resat Your Style!",
    icon: "warning",
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("confirmed");
      localStorage.clear();
      window.location.reload();
    }else{
      console.log("canceled")
    }
  })
    
  
};

 // Toggle Menu 

 let toggleBtn = document.querySelector('.toggle-menu');
 let tLinks = document.querySelector(".links");

 toggleBtn.onclick = function (e) {
  e.stopPropagation();

  // toggle Class "menu actve" on button
  this.classList.toggle("menu-active");

  // toggle class "open" On Links
  tLinks.classList.toggle("open"); 
 };
 // Click Anywhere Outside menu And toggle Button 
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks) {

    // check if menu is open 
    if (tLinks.classList.contains("open")) {
        // toggle Class "menu actve" on button
        toggleBtn.classList.toggle("menu-active");

        // toggle class "open" On Links
        tLinks.classList.toggle("open"); 
    }
  }
});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
e.stopPropagation();

}
// dark mode icon

/* let switchCont = document.querySelectorAll(".SwitchControl"); */
/* let dark = document.querySelectorAll('.darkMode'); */


/* switchCont.forEach(
  switchControl => switchControl.addEventListener("click", () => toggleSwitch(switchControl))
  ); */

/* dark.forEach (
  darkMode => darkMode.addEventListener("click"), () => toggleSwitch(dark)
) */

/* const toggleSwitch = (control) => {
    if(control.classList.contains("off")) {
        enableSwitch(control);
    }
    else if(control.classList.contains("on")) {
       disableSwitch(control);
       dark.classList.toggle('darkMode')
    }
}

const enableSwitch = (control) => {
    control.classList.remove("off");
    control.classList.add("on");
}

const disableSwitch = (control) => {
    control.classList.remove("on");
    control.classList.add("off");
} */


// change font style 
const fontSelector = document.getElementById('myfont');
    fontSelector.addEventListener('change', () => {
      document.body.dataset.font = fontSelector.value;
      localStorage.setItem('myfont', fontSelector.value);
    });


    // Dark mode
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
