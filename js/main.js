'use strict'

function onBallClick(ball, maxDiameter) {
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

function shrinkBalls() {
  var ball1 = document.querySelector(".ball")
  var ball2 = document.querySelector(".ball2")

  var ball1Size = parseInt(window.getComputedStyle(ball1).width)
  var randomDecrement = getRandomInt(20, 60)
  var newBall1Size = Math.max(ball1Size - randomDecrement, 100)
  ball1.style.width = `${newBall1Size}px`
  ball1.style.height = `${newBall1Size}px`
  ball1.textContent = newBall1Size

  var ball2Size = parseInt(window.getComputedStyle(ball2).width)
  var newBall2Size = Math.max(ball2Size - randomDecrement, 100)
  ball2.style.width = `${newBall2Size}px`
  ball2.style.height = `${newBall2Size}px`
  ball2.textContent = newBall2Size
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor()
}

function resetGame() {
  var ball1 = document.querySelector(".ball")
  var ball2 = document.querySelector(".ball2")
  var ball3 = document.querySelector(".ball3")
  var ball4 = document.querySelector(".ball4")
  var ball5 = document.querySelector(".ball5")

  ball1.style.width = "100px"
  ball1.style.height = "100px"
  ball1.textContent = "100"
  ball1.style.backgroundColor = "red"

  ball2.style.width = "100px"
  ball2.style.height = "100px"
  ball2.textContent = "100"
  ball2.style.backgroundColor = "blue"

  ball3.style.backgroundColor = "green"
  ball4.style.backgroundColor = "purple"
  ball5.style.backgroundColor = "orange"

  document.body.style.backgroundColor = "black"
}

var growthIntervalId
var shrinkIntervalId
var swapIntervalId

function startIntervals() {
  growthIntervalId = setInterval(function () {
    onBallClick(ball1, 400) 
    onBallClick(ball2, 300) 
  }, 2000)

  
  setTimeout(function () {
    shrinkIntervalId = setInterval(function () {
      shrinkBalls() 
    }, 2000)
  }, 1500)

  
  swapIntervalId = setInterval(function () {
    swapBalls() 
  }, 2000)
}

function stopIntervals() {
  clearInterval(growthIntervalId)
  clearInterval(shrinkIntervalId)
  clearInterval(swapIntervalId)
}

var ball1 = document.querySelector(".ball")
var ball2 = document.querySelector(".ball2")
var ball3 = document.querySelector(".ball3")
var ball4 = document.querySelector(".ball4")
var ball5 = document.querySelector(".ball5")
var ball6 = document.querySelector(".ball6")

ball1.addEventListener("click", function () {
  onBallClick(ball1, 400)
})

ball2.addEventListener("click", function () {
  onBallClick(ball2, 300)
})

ball3.addEventListener("click", swapBalls)
ball4.addEventListener("click", shrinkBalls)
ball5.addEventListener("click", changeBackgroundColor)
ball6.addEventListener("click", resetGame)

var hoverTimeout

ball6.addEventListener("mouseenter", function () {
  hoverTimeout = setTimeout(startIntervals, 2000)
})

ball6.addEventListener("mouseleave", function () {
  clearTimeout(hoverTimeout)
  stopIntervals()
})