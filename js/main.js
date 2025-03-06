function onBallClick() {
  const ball = document.querySelector(".ball")
  var currentSize = parseInt(window.getComputedStyle(ball).width)
  var newSize = currentSize + 50

  if (newSize > 400) {
    newSize = 100
  }

  ball.style.width = `${newSize}px`
  ball.style.height = `${newSize}px`
  ball.textContent = newSize
}

const ball = document.querySelector(".ball")
ball.addEventListener("click", onBallClick)