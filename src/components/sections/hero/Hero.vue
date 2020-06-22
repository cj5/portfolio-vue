<template>
  <div class="hero flex jcc aic" :style="`height: ${heroHt}px;`">
    <div class="hero-wrapper flex fdc aic">
      <h2 class="hero-heading slide-up fast">Web Developer</h2>
      <SocialLinks customClass="slide-up" />
      <a class="projects-link goto-projects slide-up slow" tabindex="0">
        <p class="projects">Check out my projects</p>
        <p class="pointer">☟</p>
      </a>
    </div>
    <CellularAutomata :heroHt="heroHt" />
  </div>
</template>

<script>
import CellularAutomata from './CellularAutomata'
import SocialLinks from '../../SocialLinks'

export default {
  name: 'Hero',
  data() {
    return {
      heroHt: 400
    }
  },
  components: {
    CellularAutomata,
    SocialLinks,
  },
}
</script>
