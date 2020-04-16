<template>
  <div class="hero flex jcc aic" :style="`height: ${heroHt}px;`">
    <div class="hero-wrapper flex fdc aic">
      <h2 class="hero-heading">Web Developer</h2>
      <ul class="flex">
        <li><a href="">M</a></li>
        <li><a href="">L</a></li>
        <li><a href="">G</a></li>
      </ul>
      <div class="projects-link flex fdc aic">
        <a href="">Check out my projects</a>
        <a href="" class="pointer">☟</a>
      </div>
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
    CellularAutomata
  }
}
</script>
