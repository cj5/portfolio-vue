<template>
  <div id="app">
    <SvgIcons />
    <Header />
    <Hero />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/sections/header/Header'
import Hero from './components/sections/hero/Hero'
import Projects from './components/sections/projects/Projects'
import Resume from './components/sections/resume/Resume'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
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
    Footer,
    SvgIcons,
  },
  mounted() {
    window.scrollTo(0, 0)

    document.querySelector('#app').classList.add('fade-in')

    const slideUpEls = nlToArr(document.querySelectorAll('.slide-up'))
    slideUpEls.map(el => el.classList.add('slide'))

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

    // HANDLE MOBILE MENU
    const openMobNav = nlToArr(
      document.querySelectorAll('.navicon')
    )
    const closeMobNav = nlToArr(
      document.querySelectorAll('.close-mobile-nav')
    )
    const mobNav = document.querySelector('.mobile-nav')

    openMobNav.map(el => {
      el.addEventListener('click', () => {
        mobNav.classList.add('show')
      })
    })
    closeMobNav.map(el => {
      el.addEventListener('click', () => {
        mobNav.classList.remove('show')
      })
    })
    // END HANDLE MOBILE MENU
  }
}
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
