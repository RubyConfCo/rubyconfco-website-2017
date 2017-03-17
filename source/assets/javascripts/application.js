$(document).ready(function() {
  var total = 3;
  var progress = -1;
  var asc = true;
  setInterval(function(){
    if (progress === total) {
      asc = false;
    } else if (progress === 0) {
      asc = true;
    }
    if (asc) {
      progress++;
    } else {
      progress--;
    }
    setProgress(progress);
  }, 4000);
});
function setProgress(progress) {
  var position = [{
    x: 0,
    y: 0,
    pos: 414
  }, {
    x: 0,
    y: 0,
    pos: 332
  },
  {
    x: -1242,
    y: 0,
    pos: 414
  }];
  var translateA = "translate3D("+(position[0].x - (position[0].pos * progress))+"px, 0px, 0px)";
  var translateB = "translate3D("+0+"px, "+(position[1].y - (position[1].pos * progress))+"px, 0px)";
  var translateC = "translate3D("+(position[2].x + (position[2].pos * progress))+"px, 0px, 0px)";
  // var translateC = "translate3D("+(position[2].x + (position[2].pos * progress))+"px, "+(position[2].y + (position[2].pos * progress))+"px, 0px)";
  $('#PhotoPP1').css({
    "transform": translateA,
    "-webkit-transform": translateA
  });
  $('#PhotoPP2').css({
    "transform": translateA,
    "-webkit-transform": translateA
  });
  $('#PhotoPP3').css({
    "transform": translateB,
    "-webkit-transform": translateB
  });
  $('#PhotoPP4').css({
    "transform": translateC,
    "-webkit-transform": translateC
  });
  $('#PhotoPP5').css({
    "transform": translateC,
    "-webkit-transform": translateC
  });
  $('#PhotoPP6').css({
    "transform": translateA,
    "-webkit-transform": translateA
  });
  $('#PhotoPP7').css({
    "transform": translateB,
    "-webkit-transform": translateB
  });
  $('#PhotoPP8').css({
    "transform": translateC,
    "-webkit-transform": translateC
  });
}
