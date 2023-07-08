


// const swiper = new Swiper('.swiper-container', {
//     scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true,
//     },
//   });


//   const swiper = new Swiper('.swiper-container', {
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });



// ======================= scrollbar (testimonial) ========================== //

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// ======================= scrollbar (testimonial) end========================== //

/* ==============================================
         nav bar toggle start here 
 ============================================== */

const menuBtn = document.querySelector('#menu-btn');
const closeBtn  = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

// show menu
menuBtn.addEventListener('click', () =>{
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
});

// hide menu
closeBtn.addEventListener('click', () =>{
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
});



/*
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () => {
  toggleMenu();
});

closeBtn.addEventListener('click', () => {
  toggleMenu();
});

function toggleMenu() {
  const buttons = [menuBtn, closeBtn];
  for (let i = 0; i < buttons.length; i++) {
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
      buttons[i].style.display = 'none';
    } else {
      menu.style.display = 'none';
      buttons[i].style.display = 'inline-block';
    }
  }
}
*/

/* ==============================================
         nav bar toggle start here 
 ============================================== */

/* =============================================
                 active class 
   ============================================= */


const navItems = menu.querySelectorAll('li');

const changeActiveItem = () =>{
  navItems.forEach(item =>{
    const link = item.querySelector('a');
    link.classList.remove('active');
  });
};

navItems.forEach(item =>{
  const link = item.querySelector('a');
  link.addEventListener('click', () =>{
    changeActiveItem();
    link.classList.add('active');
  });
});


/* =============================================
                 active class end
   ============================================= */



/* ===============================================
read more button
================================================== */


const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click',() =>{
  readMoreContent.classList.toggle('show-content');
  if(readMoreContent.classList.contains('show-content')){
    readMoreBtn.textContent = "Show less";
  }else {
    readMoreBtn.textContent = "Show more";
  }
});


/* ===============================================
read more button end
================================================== */


/* ================================================
                  Show/Hide skills part
   ================================================ */

  const skillItems = document.querySelectorAll('section.skills .skill');

  skillItems.forEach(skill =>{
    skill.querySelector('.head').addEventListener('click', ()=>{
      skill.querySelector('.items').classList.toggle('show-items');
    });
  });


  /* ================================================
                  Show/Hide skills part
   ================================================ */



   /* ============================================
    Back to top button 
    ============================================== */
    let calcScrollValue=()=>{
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById ("progress-value");
      let pos = document.documentElement.scrollTop;
  
      let calcHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      let scrollValue = Math.round((pos*100)/calcHeight);
      
      if (pos >100){
          scrollProgress.style.display ="grid";
      }
      else{
          scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", ()=>{
          document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(var(--color-primary) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  }
  window.onscroll= calcScrollValue;
  window.onload= calcScrollValue;