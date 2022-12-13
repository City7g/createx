import barba from '@barba/core'
import gsap from 'gsap'

const pageAnimation = () => {
  barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.3
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.3
        });
      }
    }]
  })
}

export default pageAnimation;