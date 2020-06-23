define(["jquery"], function($) {
  return (addItem = function(trigger) {
    var $trigger = $(trigger);
    $trigger.on("click", function(event) {
      console.log("Add Item event clicked");
      $("#status").text("Add Item triggered");
    });
  });
});
