/**
* This script file contains functions used in the portfolio
*/
function myBurgerMenu() {
  var x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

 /**
 * Skills animation
 */
var skillelements = 7;
function mySkillVal(){
  for (i = 1;i < skillelements;i++){
    elem(i) = "progress-bar"+"+i+";
    var elem = document.getElementById(elem(i))
    elem.style.width = elem.getAttribute('aria-valuenow')+'%';
  }

 /**
 * Mobile nav toggle
 */
 on('click', '.mobile-nav-toggle', function(e) {
  select('body').classList.toggle('mobile-nav-active')
  this.classList.toggle('bi-list')
  this.classList.toggle('bi-x')
})

/**
 * Scrool with ofset on links with a class name .scrollto
 */
on('click', '.scrollto', function(e) {
  if (select(this.hash)) {
    e.preventDefault()

    let body = select('body')
    if (body.classList.contains('mobile-nav-active')) {
      body.classList.remove('mobile-nav-active')
      let navbarToggle = select('.mobile-nav-toggle')
      navbarToggle.classList.toggle('bi-list')
      navbarToggle.classList.toggle('bi-x')
    }
    scrollto(this.hash)
  }
}, true)

/**
 * Scroll with ofset on page load with hash links in the url
 */
window.addEventListener('load', () => {
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash)
    }
  }
});

//  let skilsContent = select('.skills-content');
//  if (skilsContent) {
//    new Waypoint({
//      element: skilsContent,
//      offset: '80%',
//      handler: function(direction) {
//        let progress = select('.progress .progress-bar', true);
//        progress.forEach((el) => {
//          el.style.width = el.getAttribute('aria-valuenow') + '%'
//        });
//      }
//    })
//  }
}