<template>
  <footer class="footer">
    <div class="container flex jcb aic">
      <p><span class="copy">&copy;</span> {{ year }} | Chris Stack — Portfolio</p>
      <a class="goto-top link-2" tabindex="0">
        <svg class="icon icon-arrow-up"><use xlink:href="#icon-arrow-up"></use></svg>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
}
</script>