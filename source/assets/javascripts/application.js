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
    y: -650,
    pos: 193
  }, {
    x: -54,
    y: 0,
    pos: 250
  }, {
    x: -446,
    y: -650,
    pos: 193
  }];
  var translateA = "translate3D("+(position[0].x - (position[0].pos * progress))+"px, "+(position[0].y + (position[0].pos * progress))+"px, 0px)";
  var translateB = "translate3D("+position[1].x+"px, "+(position[1].y - (position[1].pos * progress))+"px, 0px)";
  var translateC = "translate3D("+(position[2].x + (position[2].pos * progress))+"px, "+(position[2].y + (position[2].pos * progress))+"px, 0px)";
  $('#PhotoPP1').css({
    "transform": translateA,
    "-webkit-transform": translateA
  });
  $('#PhotoPP2').css({
    "transform": translateB,
    "-webkit-transform": translateB
  });
  $('#PhotoPP3').css({
    "transform": translateC,
    "-webkit-transform": translateC
  });
}
