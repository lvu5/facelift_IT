function getAway() {
    // Find button
    const getawayButton = document.querySelector('#get-away');
    if (getawayButton) {
      //recieve acf data from button
      const getawayUrl = getawayButton.dataset.getawayUrl;
      // Get away right now
      window.open(getawayUrl, "_newtab");
      // Replace current site with another benign site
      window.location.replace('http://google.com');
    }
  }
  
  $(function() {
  
    $("#get-away").on("click", function(e) {
      getAway();
    });
  
    $("#get-away a").on("click", function(e) {
      // allow the (?) link to work
      e.stopPropagation();
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode == 27) { // escape key
        getAway();
      }
    });
  
  });
  