<template>
  <div id="app">
    <SvgIcons />
    <Header />
    <Hero />
    <Projects />
    <Resume />
  </div>
</template>

<script>
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Resume from './components/sections/Resume'
import SvgIcons from './components/SvgIcons'

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    Projects,
    Resume,
    SvgIcons,
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
