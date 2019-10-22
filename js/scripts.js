$(document).ready(function() {
  $("button#cat").click(function() {
    $("body").addClass("class1");
  });

  $("button#dog").click(function() {
    $("body").addClass("class2");
  });

  $("button#bird").click(function() {
    $("body").addClass("class3");
  });
});
