<template>
  <div>
    <header class="header">
      <HeaderContent />
    </header>
    <header class="sticky-header">
      <HeaderContent />
    </header>
  </div>
</template>

<script>
import HeaderContent from '../HeaderContent'

export default {
  name: 'Header',
  components: {
    HeaderContent
  }
}
</script>