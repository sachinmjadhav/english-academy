// Loading Animation
document.onreadystatechange = function() {
  var state = document.readyState;
  console.log(state);
  if (state == "interactive") {
    document.getElementById("contents").style.visibility = "hidden";
  } else if (state == "complete") {
    setTimeout(function() {
      document.getElementById("load").style.visibility = "hidden";
      document.getElementById("contents").style.visibility = "visible";
    }, 100);
  }
};

// Dropdown on hover
$("ul.navbar-nav li.dropdown").hover(
  function() {
    $(this)
      .find(".dropdown-menu")
      .stop(true, true)
      .delay(100)
      .fadeIn(500);
  },
  function() {
    $(this)
      .find(".dropdown-menu")
      .stop(true, true)
      .delay(100)
      .fadeOut(500);
  }
);
