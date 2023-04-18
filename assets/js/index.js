const DEFAULT_ANIMATION = 'fade-in'
const WINDOW_HEIGHT = window.innerHeight

let animated = document.querySelectorAll('[data-animation]')

const isInViewport = (el) => {
  let viewportOffset = el.getBoundingClientRect()
  let top = viewportOffset.top
  if (top < WINDOW_HEIGHT) {
    return true
  }
  return false
}

function handleScroll() {
  for (let i = 0; i < animated.length; i++) {
    let el = animated[i]
    let animationType = el.dataset.animation
      ? el.dataset.animation
      : DEFAULT_ANIMATION
    if (isInViewport(el)) {
      el.classList.add(`animation-${animationType}`)
    }
  }
}

handleScroll()
window.addEventListener('scroll', handleScroll)
