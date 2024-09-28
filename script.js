// to get current year using js
const yearel=document.querySelector(".year");
const currentyear= new Date().getFullYear();
yearel.textContent=currentyear;
// mobile navigation work

const btnnavel=document.querySelector(".mobilenav");
const headerel = document.querySelector(".head");

btnnavel.addEventListener('click', function(){
  headerel.classList.toggle("navopen");
});

///////////////////////////////
// smooth scrolling
const alllinks = document.querySelectorAll('a:link');
alllinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href= link.getAttribute("href");

    // scroll back to top
    if( href==='#') window.scrollTo({
      top:0,
      behavior:"smooth",
    });
    // scroll to other links
    if(href!=="#" && href.startsWith('#')){
     const secel = document.querySelector(href);
     secel.scrollIntoView({behavior:"smooth"});
  }
  // removing menu after cclicking on a link in menu
  if(link.classList.contains('mnavlink')){
  headerel.classList.toggle("navopen");
}
  });
});
////////////////////////////////
// sticky nav
const sectionheroel= document.querySelector(".sec-hero");
const obs=new IntersectionObserver(function(entries) {
  const ent = entries[0];
  if(ent.isIntersecting===false)
  document.body.classList.add('sticky');
  if(ent.isIntersecting===true)
  document.body.classList.remove('sticky');
},
{
  // in the viewport
  // null means the viewport
  root:null,
  // 0 means when 0% of the hero sec in in the viewport
  // 1 when the hero is completly inside the viewport
  threshold:0,
  // to triger before we reach feature sec
  rootMargin:'-80px'
});
obs.observe(sectionheroel);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
///////////////below code used to fix flexbox gap in safari we should paste this in css if required ///////////
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
