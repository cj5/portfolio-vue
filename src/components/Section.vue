<template>
  <section class="section">
    <div class="container">
      <h2 class="heading-section" :id="id">{{ heading }}</h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    heading: String,
    id: String
  }
}
</script>