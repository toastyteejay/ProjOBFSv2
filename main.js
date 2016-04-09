var canvas = document.getElementById('myCanvas'),
		ctx = canvas.getContext('2d');

function print(texterooni) {
  ctx.font = '50px Indie Flower';
  ctx.textAlign = 'left'; // part of text to align by
  ctx. textBaseline = 'top'; // part of text to align by
  ctx.fillStyle = 'red';  // a color name or by using rgb/rgba/hex values
  //tCtx.canvas.width = tCtx.measureText(canvas).width;
  ctx.fillText(texterooni, 0, 0); // text and position
}

print('Narwhal Butts');
