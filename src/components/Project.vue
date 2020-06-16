<template>
  <a 
    class="project-wrap" 
    ref="projectWrap"
    :style="`background-color: ${data.bgColor};`"
  >
    <div class="project">
      <img 
        :src="this.img(data.imgFile)" 
        :alt="`${data.title} logo`"
        :style="`width: ${data.imgWidth};`"
        v-if="data.imgFile"
      >
      <div class="bg-img" v-if="data.imgFileBg">
        <img :src="this.img(data.imgFileBg)" alt="">
        <div 
          class="img-filter" 
          :style="`background-color: ${data.filterColor};`"></div>
      </div>

    </div>
    <div class="project-overlay">
      <div class="content">
        <h3 class="heading">{{ data.title }}</h3>
        <h4 class="subheading">{{ data.subtitle }}</h4>
        <ul class="tech-list">
          <li v-for="(tech, key) in data.techList" :key="key">{{ tech }}</li>
        </ul>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Project',
  props: {
    data: Object
  },
  methods: {
    sizeProjectEls() {
      const projectEl = this.$refs.projectWrap
      const width = projectEl.clientWidth
      projectEl.style.height = Math.round(width / 1.7) + 'px'
    },
    img(fileName) {
      return require(`../images/${fileName}`)
    }
  },
  mounted() {
    this.sizeProjectEls();
    window.addEventListener('resize', this.sizeProjectEls)
  },
  destroyed() {
    window.removeEventListener('resize', this.sizeProjectEls)
  }
}
</script>