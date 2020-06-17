<template>
  <Section heading="Résumé" id="resume">
    <div class="mxw-wrap">
      <ResumeSection heading="Summary">
        <p>Web developer with six years experience building web applications. Mostly focused on the front-end with a strong background in JavaScript using ES6 and libraries like Vue and React. Also proficient with back-end and database technologies such as Node, PHP/Laravel and SQL. Strong problem solver with excellent communication and collaboration skills. Focused on writing clean, testable code in a highly productive manner.</p>
      </ResumeSection>

      <ResumeSection heading="Experience">
        <div class="exp-wrap flex fdc">
          <div class="exp-item" v-for="(i, key1) in experience" :key="key1">
            <h4 class="subheading">
              <span class="uppercase">{{ i.title }}</span> | <span class="italic">{{ i.date }}</span>
            </h4>
            <div 
              v-for="(j, key2) in i.lists" 
              :key="key2"
              class="list"
            >
              <p v-if="j.listHeading" class="italic">{{ j.listHeading }}</p>
              <ul>
                <li v-for="(k, key3) in j.listItems" :key="key3">{{ k }}</li>
              </ul>
            </div>
          </div>
        </div>
      </ResumeSection>

      <ResumeSection heading="Technologies">
        <ul class="tech-wrap">
          <li>HTML</li>
          <li>Node</li>
          <li>PHP / Laravel</li>
          <li>CSS / Sass</li>
          <li>Bootstrap</li>
          <li>SQL / NoSQL</li>
          <li>JavaScript / ES6</li>
          <li>Webpack / Gulp</li>
          <li>Git</li>
          <li>Vue / React</li>
          <li>GraphQL / REST</li>
          <li>Headless CMS</li>
        </ul>
      </ResumeSection>

      <ResumeSection heading="Qualifications">
        <ul class="qualifications">
          <li>Productivity focused</li>
          <li>Logical and systematic problem solver</li>
          <li>Detail Oriented</li>
          <li>Work effectively in collaborative environments</li>
          <li>Strong organizational and time management skills</li>
        </ul>
      </ResumeSection>

      <ResumeSection heading="Education">
        <div class="education">
          <p>University of Saint Thomas — Saint Paul, Minnesota</p>
          <p><span class="italic">Bachelor of Science in Mechanical Engineering</span> — December 2014</p>
          <ul>
            <li>Semester long computer science class on programming fundamentals and the C language</li>
            <li>Completed electrical engineering projects involving programming LEDs to sync with melodies and a digital stopwatch</li>
          </ul>
        </div>
      </ResumeSection>
    </div>
  </Section>
</template>

<script>
import Section from '../../Section'
import ResumeSection from './ResumeSection'
import { experience } from '../../../content'

export default {
  name: 'Resume',
  components: {
    Section,
    ResumeSection
  },
  data() {
    return {
      experience
    }
  }
}
</script>