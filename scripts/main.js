$("#menu").click(function() {
  $("#menu-items").addClass("open");
});

$("#menu-items a").click(function() {
  $("#menu-items").removeClass("open");
});
