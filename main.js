var visibile = $('i');
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
