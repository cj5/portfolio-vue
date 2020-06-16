<template>
  <section class="container section">
    <h2 class="heading-section">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String
  }
}
</script>