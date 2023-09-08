import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const title = new SplitType('h1')
gsap.to('.char', {
  y: 0,
  stagger: 0.06,
  dalay: 0.2,
  duration: 0.5,
  ease: 'back.inOut'
})
