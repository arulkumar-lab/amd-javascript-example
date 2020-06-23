define(["jquery"], function($) {
  return (removeItem = function(trigger) {
    var $trigger = $(trigger);
    $trigger.on("click", function(event) {
      console.log("Remove Item event clicked");
      $("#status").text("Remove Item triggered");
    });
  });
});
