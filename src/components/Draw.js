const Draw = event => {
  const canvas = document.getElementById('test');
  const ctx = canvas.getContext('2d');

  //   document.querySelector('#test').onmousemove = function (event) {
  //     event = event || window.event;
  //     console.log(event);
  //   };

  let pointsX = [];
  let pointsY = [];
  canvas.addEventListener('mousedown', function (event) {
    console.log(event.offsetX, event.offsetY);

    // let x = 0;
    // let y = 0;

    let x = event.offsetX;
    let y = event.offsetY;
    pointsX.push(x);
    pointsY.push(y);
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = '3';

    for (let i = 0; i < pointsX.length; i += 1) {
      ctx.moveTo(pointsX[i], pointsY[i]);
      //   document.querySelector('#test').onmousemove = function (event) {
      //     event = event || window.event;
      //     console.log(event.offsetX, event.offsety);
      //     ctx.lineTo(event.offsetX, event.offsetY);
      //   };
      ctx.lineTo(pointsX[i + 1], pointsY[i + 1]);
      ctx.stroke();
      i += 1;
    }
  });

  //   if (event.which === 1) {
  //     ctx.strokeStyle = '#FF0000';
  //     ctx.lineWidth = '3';
  //     ctx.moveTo(0, 0);
  //     ctx.lineTo(150, 150);
  //     ctx.stroke();
  //   }
  return null;
};
export default Draw;
