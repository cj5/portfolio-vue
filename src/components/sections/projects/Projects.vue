<template>
  <Section heading="Projects" id="projects">
    <div class="projects-section">
      <Project
        v-for="(i, key) in projects.length"
        :key="key"
        :data="projects[key]"
      />
    </div>
  </Section>
</template>

<script>
import Section from '../../Section'
import Project from './Project'
import { projects } from '../../../content'

export default {
  name: 'Projects',
  components: {
    Section,
    Project,
  },
  data() {
    return {
      projects,
    }
  },
}
</script>