'use strict'

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


var ball1 = document.querySelector(".ball")
var ball2 = document.querySelector(".ball2")

ball1.addEventListener("click", function(event) {
  onBallClick(event, 400) 
})

ball2.addEventListener("click", function(event) {
  onBallClick(event, 300)
})