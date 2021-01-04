/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
// Navbar Toggler
var sidebarToggler = document.querySelectorAll(".sidebar-toggler");

for (var i = 0; i < sidebarToggler.length; i++) {
  var toggler = sidebarToggler[i];
  toggler.addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) sidebar.classList.remove('active');else sidebar.classList.add('active');
  });
} //Perfect Scrollbar INit


if (typeof PerfectScrollbar == 'function') {
  var container = document.querySelector(".sidebar-wrapper");
  var ps = new PerfectScrollbar(container);
}

window.onload = function () {
  var w = window.innerWidth;

  if (w < 768) {
    console.log('widthnya ', w);
    document.getElementById('sidebar').classList.remove('active');
  }
}; //------- search feild hide show-----------


window.onload = function toggle(sr) {
  var search = document.getElementById('search');

  if (search.style.display == 'block') {
    search.style.display = 'none'; //document.getElementById(sr.id).style = 'fa-search';
  } else {
    search.style.display = 'block'; //document.getElementById(sr.id).style = 'fa-times';
  }
};

feather.replace();
/******/ })()
;