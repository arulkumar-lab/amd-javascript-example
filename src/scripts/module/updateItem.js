define(["jquery"], function($) {
  return (updateItem = function(trigger) {
    var $trigger = $(trigger);
    $trigger.on("click", function(event) {
      console.log("Update event clicked");
      $("#status").text("Update Item triggered");
    });
  });
});
