<template>
  <div id="app">
    <SvgIcons />
    <Header />
    <Hero />
    <Projects />
    <Resume />
    <Contact />
  </div>
</template>

<script>
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'
import SvgIcons from './components/SvgIcons'
import { nlToArr, addSmoothScroll, setTabIndex } from './helpers'

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    Projects,
    Resume,
    Contact,
    SvgIcons,
  },
  mounted() {
    window.scrollTo(0, 0)

    // HANDLE SMOOTH SCROLL
    const gotoTop = nlToArr(
      document.querySelectorAll('.goto-top')
    )
    const top = document.querySelector('body')
    const gotoProjects = nlToArr(
      document.querySelectorAll('.goto-projects')
    )
    const projects = document.querySelector('#projects')
    const gotoResume = nlToArr(
      document.querySelectorAll('.goto-resume')
    )
    const resume = document.querySelector('#resume')
    const gotoContact = nlToArr(
      document.querySelectorAll('.goto-contact')
    )
    const contact = document.querySelector('#contact')
    
    addSmoothScroll(gotoTop, top)
    addSmoothScroll(gotoProjects, projects)
    addSmoothScroll(gotoResume, resume)
    addSmoothScroll(gotoContact, contact)
    // END HANDLE SMOOTH SCROLL

    // HANDLE HEADER TRANSITIONS (STICKY, MOBILE)
    const header = document.querySelector('.header')
    const headerLinks = nlToArr(header.querySelectorAll('.link-1'))
    const stickyHeader = document.querySelector('.sticky-header')
    const stickyHeaderLinks = nlToArr(stickyHeader.querySelectorAll('.link-1'))
    const hero = document.querySelector('.hero')
    let headerHt = header.offsetHeight

    let headerState = 'header'

    setTabIndex(stickyHeaderLinks, -1)

    const headerTransitions = () => {
      if (window.pageYOffset > headerHt) {
        if (headerState === 'header') {
          stickyHeader.classList.add('show')
          setTabIndex(stickyHeaderLinks, 0)
          setTabIndex(headerLinks, -1)
        }
        headerState = 'sticky'
      } else {
        if (headerState === 'sticky') {
          stickyHeader.classList.remove('show')
          setTabIndex(stickyHeaderLinks, -1)
          setTabIndex(headerLinks, 0)
        }
        headerState = 'header'
      }
    }

    window.addEventListener('scroll', headerTransitions)
    // END HANDLE HEADER TRANSITIONS
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
