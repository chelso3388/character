$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var question1 = $("input:[name=question1]:checked").val();

    if (question1 === "Kaladin") {
      $("#2").hide();
      $("3").hide();
      $("#1").show();
    } else if (animal === "Dalinar") {
      $("#1").hide();
      $("#3").hide();
      $("#2").show();
    } else {
      $("#2").hide();
      $("#1").hide();
      $("#3").show();
    }
  });
});
