<template>
  <ul :class="`social flex${compCustomClass}`">
    <li>
      <a class="social-icon link-1" href="mailto:chris@chrisstack.co">
        <svg class="icon icon-mail"><use xlink:href="#icon-mail"></use></svg>
      </a>
    </li>
    <li>
      <a class="social-icon link-1" href="https://www.linkedin.com/in/chris-stack-5ba22851" target="_blank">
        <svg class="icon icon-linkedin"><use xlink:href="#icon-linkedin"></use></svg>
      </a>
    </li>
    <li>
      <a class="social-icon link-1" href="https://github.com/cj5" target="_blank">
        <svg class="icon icon-github"><use xlink:href="#icon-github"></use></svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialLinks',
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