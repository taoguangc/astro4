import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

document.getElementById('totop').addEventListener('click', () => {
  lenis.scrollTo('top', { duration: 1.5 })
})

gsap.registerPlugin(ScrollTrigger)
window.gsap = gsap
window.ScrollTrigger = ScrollTrigger
