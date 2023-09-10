// $(document).ready(function() {
//     
//     $('.navbar a[href*="#"]').on('click', function(event) {
//     
//         event.preventDefault();

//     
//         var targetId = $(this).attr("href");

//     
//         var $targetElement = $(targetId);
//         if ($targetElement.length) {
//     
//             var scrollTop = $targetElement.offset().top;

//     
//             $('html, body').animate({
//                 scrollTop: scrollTop
//             }, 800); 
//         }
//     });
// });

$(document).ready(function() {
        $('.navbar a[href*="#"]').on('click', function(event) {
       
        event.preventDefault();

       
        var targetId = $(this).attr("href");

       
        var $targetElement = $(targetId);
        if ($targetElement.length) {
           
            var scrollTop = $targetElement.offset().top;

           
            $('html, body').animate({
                scrollTop: scrollTop
            }, 800);
        }
    });
});
// function myfunction(){
//     var element =document.body;
//     element.classList.toggle("dark-mode");
// }
// document.addEventListener('DOMContentLoaded', function() {
//     const darkModeToggle = document.getElementById('dark-mode-checkbox');
//     const divElements = document.querySelectorAll('.top-container, .middle-container, .bottom-container');

//     darkModeToggle.addEventListener('change', function() {
//         if (darkModeToggle.checked) {
//             // Enable dark mode
//             divElements.forEach(function(div) {
//                 div.classList.add('dark-mode');
//             });
//         } else {
//             // Disable dark mode
//             divElements.forEach(function(div) {
//                 div.classList.remove('dark-mode');
//             });
//         }
//     });
// });