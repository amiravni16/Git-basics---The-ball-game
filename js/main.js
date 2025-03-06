'use strict'

function onBallClick(event) {
  var ball = event.target
  var currentSize = parseInt(window.getComputedStyle(ball).width)
  var randomIncrement = getRandomInt(20, 60) 
  var newSize = currentSize + randomIncrement

  if (newSize > 400) {
    newSize = 100
  }

  ball.style.width = `${newSize}px`
  ball.style.height = `${newSize}px`
  ball.textContent = newSize
  ball.style.backgroundColor = getRandomColor() 
}


var ball1 = document.querySelector(".ball")
var ball2 = document.querySelector(".ball2")

ball1.addEventListener("click", onBallClick)
ball2.addEventListener("click", onBallClick)