<template>
  <div>
    <header class="header">
      <HeaderContent />
    </header>
    <header class="sticky-header">
      <HeaderContent toTopLink />
    </header>
    <div class="mobile-nav">
      <div class="mobile-nav-header">
        <div class="container flex jcb aic">
          <a class="goto-top close-mobile-nav">Chris Stack</a>
          <a class="close close-mobile-nav"></a>
        </div>
      </div>
      <div class="nav-wrap">
        <div class="container">
          <HeaderNav customClass="close-mobile-nav" />
          <SocialLinks />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderContent from './HeaderContent'
import HeaderNav from './HeaderNav'
import SocialLinks from '../../SocialLinks'

export default {
  name: 'Header',
  components: {
    HeaderContent,
    HeaderNav,
    SocialLinks,
  },
}
</script>