$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      let food_id = $(this).children(".food_id").val();
      console.log(food_id);
      $.ajax({
        method: "PUT",
        url: "/food/" + food_id
      }).then(function(data) {
        // reload page to display devoured food in proper column
        location.reload();
      });
  
    });
  });  