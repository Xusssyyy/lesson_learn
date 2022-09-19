var canvas = document.getElementById("canvas")
canvas.width = 1280
canvas.height = 720
var ctx = canvas.getContext("2d")
var particlesArray = []
var count = 2000
var img = new Image()
img.src = "https://tse4-mm.cn.bing.net/th/id/OIP-C.JKiWIBjROMmLPNgSydCWWAHaEo?w=173&h=108&c=7&r=0&o=5&dpr=2&pid=1.7"
// var imgW = '';
// var imgH = '';

// imgObj.onload = function() {
//     imgW = imgObj.width;
//     imgH = imgObj.height;
//     var ctx7 = c7.getContext("2d");
//     ctx7.drawImage(this,0,0,cW,imgH*cW/imgW)
// }
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speed = 0
        this.vy = Math.random() + 0.5
        this.vx = Math.random() - 0.5
        this.size = Math.random() * 1.5 + 1
    }
    update() {
        this.y += this.vy
        this.x += this.vx
        if (this.y >= canvas.height) {
            this.y = 0
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

function init() {
    for (var i = 0; i < count; i++) {
        particlesArray.push(new Particle)
    }
}
init()
img.addEventListener("load", function() {
    function animate() {
        ctx.drawImage(img, 0, 0)
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0,0,0)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        for (var i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update()
            particlesArray[i].draw()
        }
        requestAnimationFrame(animate)
    }
    animate()
})