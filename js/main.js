function onBallClick() {
  
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
const ball = document.querySelector(".ball")
ball.addEventListener("click", onBallClick)