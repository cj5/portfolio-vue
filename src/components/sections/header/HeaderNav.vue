<template>
  <nav>
    <ul class="flex">
      <li>
        <a :class="`link-1 goto-projects${compCustomClass}`">Projects</a>
      </li>
      <li>
        <a :class="`link-1 goto-resume${compCustomClass}`">Résumé</a>
      </li>
      <li>
        <a :class="`link-1 goto-contact${compCustomClass}`">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    customClass: String
  },
  computed: {
    compCustomClass() {
      let val
      this.customClass ? val = ` ${this.customClass}` : val = ''
      return val
    }
  }
}
</script>