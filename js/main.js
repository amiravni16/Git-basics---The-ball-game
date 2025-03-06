function onBallClick() {
  const ball = document.querySelector(".ball")
  let currentSize = parseInt(window.getComputedStyle(ball).width)
  const newSize = currentSize + 50
  ball.style.width = `${newSize}px`
  ball.style.height = `${newSize}px`
  ball.textContent = newSize
}

const ball = document.querySelector(".ball")
ball.addEventListener("click", onBallClick)