<template>
  <div 
    class="project-wrap" 
    ref="projectWrap"
    :style="`background-color: ${data.bgColor};`"
  >
    <a class="link-1 project-link" :href="data.href" target="_blank">
      <div class="mobile-link-text">
        <p>Go to project</p>
        <svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg>
      </div>
    </a>
    <div class="mobile-project-heading">
      <h3 class="heading">{{ data.title }}</h3>
      <h4 class="subheading italic">{{ data.subtitle }}</h4>
    </div>
    <div class="project">
      <img 
        :src="this.img(data.imgFile)" 
        :alt="`${data.title} logo`"
        class="img-logo"
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
        <h4 class="subheading italic">{{ data.subtitle }}</h4>
        <ul class="tech-list">
          <li v-for="(tech, key) in data.techList" :key="key">{{ tech }}</li>
        </ul>
      </div>
      <div class="goto-project" v-if="data.href">
        <svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg>
        <p>Go to project</p>
      </div>
      <div class="project-description" v-if="data.description">
        <p>{{ data.description }}</p>
      </div>
    </div>
  </div>
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
      return require(`../../../images/${fileName}`)
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