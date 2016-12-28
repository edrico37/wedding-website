var colors = [
  'orange',
  'yellow',
  'lime',
  'hotpink',
  'cyan'
];

$(document).ready(function() {
  // initialize the color flash text
  var $colorFlash = $('.color-flash'),
    colorIndex = 0,
    numColors = colors.length;
  window.setInterval(function() {
    var color = colors[colorIndex % numColors];
    $colorFlash.css('color', color);
    colorIndex++;
  }, 400);
});
