import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  // duration: 1.2,
  // smoothWheel: true,
})

lenis.on('scroll', ScrollTrigger.update)

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }
// requestAnimationFrame(raf)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

document.getElementById('totop').addEventListener('click', () => {
  lenis.scrollTo('top', { duration: 1.5 })
})

window.gsap = gsap
window.ScrollTrigger = ScrollTrigger
