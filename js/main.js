// main.js
function onBallClick(event, maxDiameter) {
  var ball = event.target
  var currentSize = parseInt(window.getComputedStyle(ball).width)
  var randomIncrement = getRandomInt(20, 60) 
  var newSize = currentSize + randomIncrement

  if (newSize > maxDiameter) {
    newSize = 100
  }

  ball.style.width = `${newSize}px`
  ball.style.height = `${newSize}px`
  ball.textContent = newSize
  ball.style.backgroundColor = getRandomColor() 
}

function swapBalls() {
  var ball1 = document.querySelector(".ball")
  var ball2 = document.querySelector(".ball2")

  
  var ball1Size = ball1.style.width
  var ball2Size = ball2.style.width
  ball1.style.width = ball2Size
  ball1.style.height = ball2Size
  ball2.style.width = ball1Size
  ball2.style.height = ball1Size

  
  var ball1Color = ball1.style.backgroundColor
  var ball2Color = ball2.style.backgroundColor
  ball1.style.backgroundColor = ball2Color
  ball2.style.backgroundColor = ball1Color

  
  ball1.textContent = parseInt(ball2Size)
  ball2.textContent = parseInt(ball1Size)
}


var ball1 = document.querySelector(".ball")
var ball2 = document.querySelector(".ball2")
var ball3 = document.querySelector(".ball3")

ball1.addEventListener("click", function(event) {
  onBallClick(event, 400) 
})

ball2.addEventListener("click", function(event) {
  onBallClick(event, 300) 
})

ball3.addEventListener("click", swapBalls) 