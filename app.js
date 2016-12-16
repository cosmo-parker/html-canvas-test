
console.log('start')
let canvas = document.createElement('canvas')
canvas.width = 700
canvas.height = 600
document.getElementById('main').appendChild(canvas)
let ctx = canvas.getContext('2d')


function background() {
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}


function shape0() {
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
}


function shape1() {
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = '#4d4';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(80, 120)
    ctx.lineTo(110, 340)
    ctx.lineTo(280, 270)
    ctx.lineTo(330, 100)
    ctx.lineTo(230, 180)
    ctx.closePath()
    ctx.stroke()
    ctx.fill();
}

function shape1_eye() {
    ctx.strokeStyle = '#a4f'
    ctx.fillStyle = '#a0b'
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.arc(150, 200, 10, 0, 2*Math.PI)
    ctx.stroke()
    ctx.fill()
}


function shape2() {
    ctx.strokeStyle = '#adf'
    ctx.fillStyle = '#953'
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(300, 300)
    ctx.lineTo(400, 180)
    ctx.lineTo(600, 10)
    ctx.lineTo(650, 400)
    ctx.lineTo(500, 500)
    ctx.lineTo(490, 300)
    ctx.lineTo(370, 550)
    ctx.closePath()
    ctx.stroke()
    ctx.fill();
}

function shape2_eye() {
    ctx.strokeStyle = '#fff'
    ctx.fillStyle = '#f00'
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.arc(370, 380, 10, 0, 2*Math.PI)
    ctx.stroke()
    ctx.fill()
}


background()
shape0()
shape1()
shape1_eye()
shape2()
shape2_eye()



