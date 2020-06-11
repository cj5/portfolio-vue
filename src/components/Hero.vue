<template>
  <div class="hero flex jcc aic" :style="`height: ${heroHt}px;`">
    <div class="hero-wrapper flex fdc aic">
      <h2 class="hero-heading">Web Developer</h2>
      <ul class="social flex">
        <li>
          <a class="social-icon" href="mailto:chris@chrisstack.co">
            <svg class="icon icon-mail"><use xlink:href="#icon-mail"></use></svg>
          </a>
        </li>
        <li>
          <a class="social-icon" href="https://www.linkedin.com/in/chris-stack-5ba22851" target="_blank">
            <svg class="icon icon-linkedin"><use xlink:href="#icon-linkedin"></use></svg>
          </a>
        </li>
        <li>
          <a class="social-icon" href="https://github.com/cj5" target="_blank">
            <svg class="icon icon-github"><use xlink:href="#icon-github"></use></svg>
          </a>
        </li>
      </ul>
      <a href="#" class="projects-link flex fdc aic">
        <p class="projects">Check out my projects</p>
        <p class="pointer">☟</p>
      </a>
    </div>
    <CellularAutomata :heroHt="heroHt" />
  </div>
</template>

<script>
import CellularAutomata from './CellularAutomata.vue';

export default {
  name: 'Hero',
  data() {
    return {
      heroHt: 400
    }
  },
  components: {
    CellularAutomata,
  }
}
</script>
