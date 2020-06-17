<template>
  <div class="resume-section">
    <h3 class="heading">{{ heading }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ResumeSection',
  props: {
    heading: String
  }
}
</script>