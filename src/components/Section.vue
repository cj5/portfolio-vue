<template>
  <section class="container section">
    <h2 class="heading-section" :id="id">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String,
    id: String
  }
}
</script>