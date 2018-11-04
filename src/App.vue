<template>
  <div id="app">
    <Header />
    <Hero />
  </div>
</template>

<script>
import Header from './components/Header';
import Hero from './components/Hero';

export default {
  name: 'app',
  components: {
    Header,
    Hero
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
