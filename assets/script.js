// $(document).ready(function() {
//   function handleHover() {
//       if ($(window).width() > 768) {
//           $(".nav-item").hover(function() {
//               $(this).children(".dropdown-menu").toggleClass("show");
//           });
//       } 
//   }

//   handleHover();

//   $(window).resize(function() {
//       handleHover();
//   });
// });
//   document.addEventListener('DOMContentLoaded', function () {
//     var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');

//     dropdownSubmenus.forEach(function (submenu) {
//       submenu.addEventListener('click', function (e) {
//         e.stopPropagation();
//         if (submenu.classList.contains('show')) {
//           submenu.classList.remove('show');
//           submenu.querySelector('.dropdown-menu').classList.remove('show');
//         } else {
//           var openSubmenus = document.querySelectorAll('.dropdown-submenu.show');
//           openSubmenus.forEach(function (openSubmenu) {
//             openSubmenu.classList.remove('show');
//             openSubmenu.querySelector('.dropdown-menu').classList.remove('show');
//           });
//           submenu.classList.add('show');
//           submenu.querySelector('.dropdown-menu').classList.add('show');
//         }
//       });
//     });

//   });

$(".navbar-toggler").on('click', function () {
  $(this).toggleClass('active');
});
var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");
if (subMenu.length) {
  subMenu.parent('li').children('a').append(function () {
      return '<span class="submenu-toggler"><i class="fa-solid fa-angle-down"></i></span>';
  });
  var subMenuToggler = $(".submenu-toggler");
  subMenuToggler.on('click', function () {
      $(this).parent().parent().children(".sub-menu").slideToggle();
      return false
  });
}