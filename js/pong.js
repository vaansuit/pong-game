let ctx, p1_y, p2_y, p1_points, p2_points
let ball_y_orientation, ball_x_orientatio, ball_x, ball_y
const h=500, w=800, p_w=20, p_h=200, p1_x =10, p2_x= w - p_w -10

function setup () {
    const canvas = document.getElementById("canvas")
    ctx = canvas.getContext('2d')

    //Initializing the positions players

    p1_y = p2_y = ( h / 2) - (p_h / 2)

    //Initializing points

    p1_points = 0
    p2_points = 0

    //Setting the 60 FPS

    setInterval(loop, 1000/60)

    initBall()
}

function loop() {
    draw()
}

//Initializing the ball

function initBall() {
    ball_y_orientation = Math.pow(2, Math.floor( Math.random() * 2)+1) -3
    ball_x_orientation = Math.pow(2, Math.floor( Math.random() * 2)+1) -3
    ball_x = w / 2 - 10
    ball_y = h / 2 - 10

}

//Drawing the elements of the scene

function draw() {
   //background
   drawRect(0, 0, w, h, "#000")
   //p1
   drawRect(p1_x, p1_y, p_w, p_h)
   //p2
   drawRect(p2_x, p2_y, p_w, p_h)
   //sidebar
   drawRect(w/2 -5, 0, 5, h)
   //ball
   drawRect(ball_x, ball_y, 10, 10)

}

//Drawint the rects

function drawRect(x, y, w, h, color='#fff') {
    ctx.fillStyle = color
    ctx.fillRect (x, y, w, h)
    ctx.fillStyle = '#000'
}

setup()