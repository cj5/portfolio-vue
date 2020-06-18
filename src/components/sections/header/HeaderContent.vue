<template>
  <div class="container flex jcb aic w-100">
    <a class="link-1 goto-top">
      <h1 class="page-title">Chris Stack</h1>
      <svg class="icon icon-arrow-up"><use xlink:href="#icon-arrow-up"></use></svg>
    </a>
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
  }
}
</script>