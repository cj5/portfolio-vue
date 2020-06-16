<template>
  <div>
    <Section title="Projects">
      <div class="projects-wrap">
        <Project
          v-for="(i, key) in projects.length"
          :key="key"
          :data="projects[key]"
        />
      </div>
    </Section>
  </div>
</template>

<script>
import Section from '../Section'
import Project from '../Project'
import { projects } from '../../content'

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