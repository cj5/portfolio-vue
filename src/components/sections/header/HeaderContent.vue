<template>
  <div class="container flex jcb aic w-100">
    <a class="link-1 goto-top" tabindex="0" v-if="toTopLink">
      <h1 class="page-title">Chris Stack</h1>
      <svg class="icon icon-arrow-up"><use xlink:href="#icon-arrow-up"></use></svg>
    </a>
    <h1 v-else class="page-title">Chris Stack</h1>
    <HeaderNav />
    <a class="navicon"></a>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav'

export default {
  name: 'HeaderContent',
  components: {
    HeaderNav,
  },
  props: {
    toTopLink: Boolean
  }
}
</script>