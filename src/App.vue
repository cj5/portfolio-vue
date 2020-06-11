<template>
  <div id="app">
    <SvgIcons />
    <Header />
    <Hero />
    <Projects />
  </div>
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SvgIcons from './components/SvgIcons'

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    Projects,
    SvgIcons
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
