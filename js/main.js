
DomReady.ready(function()
{
	  var canvas = document.getElementById('mapcanvas');
      var context = canvas.getContext('2d');

      // begin custom shape
      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      context.closePath();
      context.lineWidth = 5;
      context.fillStyle = '#8ED6FF';
      context.fill();
      context.strokeStyle = 'blue';
      context.stroke();
});
