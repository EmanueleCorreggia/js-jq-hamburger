var visibile = $('a');
visibile.click(
  function () {
    $(".hamburger-menu").show('slow');
  }
);
var nascondi = $('.close');
nascondi.click(
  function () {
    $(".hamburger-menu").hide('slow');
  }
);
