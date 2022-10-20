const canvas = document.getElementById('test');
const ctx = canvas.getContext('2d');

// class DrawLine {
//   constructor(ctx, x, y) {
//     this.ctx = ctx;
//     this.x = x;
//     this.x = y;
//   }
// }

// const Draw = event => {
//   let pointsX = [];
//   let pointsY = [];

//   const clickLictener = event => {
//     console.log(event.offsetX, event.offsetY);
//     let x = event.offsetX;
//     let y = event.offsetY;
//     pointsX.push(x);
//     pointsY.push(y);
//     ctx.strokeStyle = '#FF0000';
//     ctx.lineWidth = '3';
//     for (let i = 0; i < pointsX.length; i += 1) {
//       ctx.moveTo(pointsX[i], pointsY[i]);
//       ctx.lineTo(pointsX[i + 1], pointsY[i + 1]);
//       ctx.stroke();
//       i += 1;
//     }
//   };

//   canvas.addEventListener('click', clickLictener);

//   return null;
// };
// export default Draw;

function drawLine(ctx, line) {
  const { start, end, lineWidth = 3, strokeStyle = '#FF0000' } = line;

  if (!start || !end) {
    throw new Error('Start or end of line not defined.');
  }

  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
}

const mouse = {
  isPressed: false,
  click: null,
  current: null,
};

const clearCanvas = ctx => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const lines = [];

const draw = () => {
  clearCanvas(ctx);
  lines.forEach(function (line) {
    drawLine(ctx, line);
  });
};

const getMousePosition = (event, element) => {
  let position = {
    x: event.clientX - element.offsetLeft,
    y: event.clientY - element.offsetTop,
  };
  return position;
};

const handleClickMouse = e => {
  mouse.isPressed = true;
  mouse.click = getMousePosition(e, canvas);

  const line = {
    start: mouse.click,
    end: mouse.click,
  };
  lines.push(line);
  // drawLine(ctx, line);
  draw();
};

const handleUpMouse = () => {
  mouse.isPressed = false;
};

const handleMoveMouse = e => {
  mouse.current = getMousePosition(e, canvas);
  if (mouse.isPressed) {
    let line = {
      start: mouse.click,
      end: mouse.current,
    };
    lines.pop();
    lines.push(line);
    // clearCanvas(ctx);
    // drawLine(ctx, line);
    draw();
  }
};

canvas.addEventListener('mousedown', handleClickMouse);

canvas.addEventListener('mouseup', handleUpMouse);

canvas.addEventListener('mousemove', handleMoveMouse);
