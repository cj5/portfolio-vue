<template>
  <Section heading="Contact" id="contact">
    <div class="contact-section">
      <SocialLinks />
    </div>
  </Section>
</template>

<script>
import Section from '../Section'
import SocialLinks from '../SocialLinks'

export default {
  name: 'Contact',
  components: {
    Section,
    SocialLinks,
  }
}
</script>