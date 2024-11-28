// when hamburger is clicked
$("#navburger-btn").click(function() {
  // find menu
  const menu = $("#nav-menu");

  if (!menu.prop("expanded")) {
    // toggle expanded property on element
    menu.prop("expanded", true);
    // show menu
    menu.removeClass("nav-hidden");

  } else {
    // toggle expanded property on element
    menu.prop("expanded", false);
    // hide menu
    menu.addClass("nav-hidden");
  }

});
