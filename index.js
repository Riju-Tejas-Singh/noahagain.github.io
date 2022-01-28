$(window).scroll(function() {
  if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background', 'white');
  } else {
    $('.navbar').css('background', 'transparent');
  }
});

// $(".fab fa-linkedin-in").on('click', function(){
//      window.location = "https://www.linkedin.com/company/noahhq/";
// });

$(document).scroll(function() {
    checkOffset();
});

function checkOffset() {
    if($('').offset().top + $('.hand-image').height()
                                           >= $('#footer').offset().top - 10)
        $('.hand-image').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
        $('.hand-image').css('position', 'fixed'); // restore when you scroll up
}
