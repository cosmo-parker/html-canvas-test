
console.log('start')
let canvas = document.createElement('canvas')
canvas.width = 700
canvas.height = 600
document.getElementById('main').appendChild(canvas)
let ctx = canvas.getContext('2d')


ctx.fillStyle = '#000'
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = '#fff'

ctx.strokeStyle = 'red'
ctx.lineWidth = 4;
ctx.beginPath()
ctx.moveTo(5, 50)
ctx.lineTo(300, 10)
ctx.lineTo(30, 100)
ctx.closePath()
ctx.stroke()
ctx.fill();


ctx.strokeStyle = 'blue'
ctx.fillStyle = '#4d4';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(100, 100)
ctx.lineTo(130, 350)
ctx.lineTo(300, 300)
ctx.lineTo(350, 130)
ctx.lineTo(290, 180)
ctx.closePath()
ctx.stroke()
ctx.fill();



