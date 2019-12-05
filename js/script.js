$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var animal = $("input:radio[name=weapon]:checked").val();

    if (weapon === "kaladin") {
      $("#dalinar").hide();
      $("jasnah").hide();
      $("#kaladin").show();
    } else if (animal === "snakes") {
      $("#insects").hide();
      $("#turtles").hide();
      $("#snakes").show();
    } else {
      $("#turtles").hide();
      $("#snakes").hide();
      $("#insects").show();
    }
  });
});
