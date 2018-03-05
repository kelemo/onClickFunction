
    
    // This code makes sure that the JavaScript doesn't get run until the HTML is finished loading
    
    $(document).ready(function() {

      // VARIABLES
      // ====================================================================
      // Here we create variables for tracking the number of sandwiches eaten

      var pbjCounter = 0;
      var grilledCheeseCounter = 0;
      var roastBeefCounter = 0;

      // FUNCTIONS
      // ====================================================================
      // Here we create various on "click" functions which capture the clicks
      // Inside each click event is the code to create an alert, update the counter, then show the updated count.

      $("#pbj").on("click", function() {
        alert("Mmm... Peanut Butter Jelly Time.");
        pbjCounter++;
        alert("You've eaten " + pbjCounter + " PB&J sandwiches");
      });

      $("#grilledcheese").on("click", function() {
        alert("Nom nom nom. Gooey Gooey Grilled Cheese!");
        grilledCheeseCounter++;
        alert("You've eaten " + grilledCheeseCounter + " grilled cheese sandwiches");
      });

      $("#roastbeef").on("click", function() {
        alert("No qualms about animal rights here. I'm all about that roast beef.");
        roastBeefCounter++;
        alert("You've eaten " + roastBeefCounter + " roast beef sandwiches");
      });
    });

