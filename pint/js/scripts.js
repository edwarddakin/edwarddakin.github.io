//BG Color Change
var colors = ["red", "green", "blue", "purple", "yellow", "orange"];
var currentColor = 0;
function switchColor() {
    if (currentColor >= colors.length) currentColor = 0;
    $('#outer').css('background-color', colors[currentColor++]);
    setTimeout(switchColor, 400);
}
switchColor();

//Rotate Drinker
var angle = 0;
setInterval(function(){
      angle+=3;
     $("#drinker").rotate(angle);
},50);

//Swop Drinker
var drinker = ["img/ED_PINT.png", "img/NF_PINT.png", "img/PINT.png", "img/ED_PINT2.png"];
var currentDrinker = 0;
function switchDrinker(){
  if (currentDrinker >= drinker.length) currentDrinker = 0;
  $("#drinker").attr('src', drinker[currentDrinker++]);
  setTimeout(switchDrinker, 1400);
}
switchDrinker();
