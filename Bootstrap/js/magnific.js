//multiple pop-up link

$(document).ready(function() {
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
  });
});

//single link popup

$(".test-popup-link").magnificPopup({
  type: "image"
  // other options
});
