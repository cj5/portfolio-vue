<template>
  <div id="app">
    <SvgIcons />
    <Header />
    <Hero />
  </div>
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'
import SvgIcons from './components/SvgIcons'

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    SvgIcons
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
