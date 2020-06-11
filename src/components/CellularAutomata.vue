<template>
  <div class="automata-wrap">
    <div 
      v-for="(i, key1) in rows"
      :key="key1"
      class="cell-row flex" 
      ref="cellRow"
    >
      <div
        v-for="(j, key2) in cellsPerRow" 
        :key="key2"
        :style="`width: ${cellSize}px; height: ${cellSize}px;`"
        ref="cell"
      ></div>
    </div>
    <!-- <div class="container"> -->
      <div class="automata-selector">
        <a href="https://mathworld.wolfram.com/ElementaryCellularAutomaton.html" target="_blank">Cellular Automaton ></a>
        <div ref="ruleSelectors">
          <a 
            role="button" 
            @click="switchRule(rule73, $event)"
          >Rule 73</a>
          <a 
            role="button" 
            @click="switchRule(rule89, $event)"
          >Rule 89</a>
          <a 
            role="button" 
            @click="switchRule(rule126, $event)"
          >Rule 126</a>
          <a 
            role="button" 
            @click="switchRule(rule150, $event)"
          >Rule 150</a>
          <a 
            role="button" 
            @click="switchRule(rule183, $event)"
          >Rule 183</a>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { nlToArr } from '../helpers'

export default {
  name: 'CellularAutomata',
  props: {
    heroHt: Number
  },
  data() {
    return {
      cellSize: 10,
      timeCount: 0,
      timeInterval: 50,
      pattern: [],
    }
  },
  computed: {
    cellsPerRow() {
      return Math.ceil(window.innerWidth / this.cellSize)
    },
    rows() {
      return Math.ceil(this.heroHt / this.cellSize)
    },
  },
  methods: {
    randomizeFirstRow() {
      nlToArr(this.$refs.cellRow[0].childNodes).map(x => {
        let rand = Math.round(Math.random())
        x.classList.add(rand === 0 ? 'false' : 'true')
      })
    },
    automatize(rule) {
      for (let i = 1; i < this.rows; i++) {
        let prevRow = this.$refs.cellRow[i - 1]
        for (let j = 0; j < this.cellsPerRow; j++) {
          if (j > 0 && j < this.cellsPerRow - 1) {
            this.pattern.push(prevRow.childNodes[j - 1].className)
            this.pattern.push(prevRow.childNodes[j].className)
            this.pattern.push(prevRow.childNodes[j + 1].className)
          } else if (j === 0) {
            this.pattern.push('false')
            this.pattern.push(prevRow.childNodes[j].className)
            this.pattern.push(prevRow.childNodes[j + 1].className)
          } else if (j === this.cellsPerRow - 1) {
            this.pattern.push(prevRow.childNodes[j - 1].className)
            this.pattern.push(prevRow.childNodes[j].className)
            this.pattern.push('false')
          }
          if (rule()) {
            this.$refs.cellRow[i].childNodes[j].classList.add('true')
          } else {
            this.$refs.cellRow[i].childNodes[j].classList.add('false')
          }
          this.pattern = []
        }
      }
    },
    showRows() {
      for (let i = 0; i < this.rows; i++) {
        setTimeout(() => this.$refs.cellRow[i].classList.add('show'), this.timeCount)
        this.timeCount = this.timeCount + this.timeInterval
      }
    },
    hideRows() {
      for (let i = 0; i < this.rows; i++) {
        this.$refs.cellRow[i].classList.remove('show')
        for (let j = 0; j < this.cellsPerRow; j++) {
          this.$refs.cellRow[i].childNodes[j].classList.remove('true')
          this.$refs.cellRow[i].childNodes[j].classList.remove('false')
        }
      }
    },
    arraysEqual(a, b) {
      if (a === b) return true
      if (a == null || b == null) return false
      if (a.length != b.length) return false

      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
      }
      return true
    },
    // CELLULAR AUTOMATA RULES
    rule73() {
      return this.arraysEqual(this.pattern, ['true', 'true', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'true', 'true']) ||
      this.arraysEqual(this.pattern, ['false', 'false', 'false'])
    },
    rule89() {
      return this.arraysEqual(this.pattern, ['true', 'true', 'false']) ||
      this.arraysEqual(this.pattern, ['true', 'false', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'true', 'true']) ||
      this.arraysEqual(this.pattern, ['false', 'false', 'false'])
    },
    rule126() {
      return this.arraysEqual(this.pattern, ['true', 'true', 'false']) ||
      this.arraysEqual(this.pattern, ['true', 'false', 'true']) ||
      this.arraysEqual(this.pattern, ['true', 'false', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'true', 'true']) ||
      this.arraysEqual(this.pattern, ['false', 'true', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'false', 'true'])
    },
    rule150() {
      return this.arraysEqual(this.pattern, ['true', 'true', 'true']) ||
      this.arraysEqual(this.pattern, ['true', 'false', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'true', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'false', 'true'])
    },
    rule183() {
      return this.arraysEqual(this.pattern, ['true', 'true', 'true']) ||
      this.arraysEqual(this.pattern, ['true', 'false', 'true']) ||
      this.arraysEqual(this.pattern, ['true', 'false', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'true', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'false', 'true']) ||
      this.arraysEqual(this.pattern, ['false', 'false', 'false'])
    },
    // [END] CELLULAR AUTOMATA RULES
    switchRule(rule, event) {
      this.hideRows()
      this.randomizeFirstRow()
      this.$nextTick(() => {
        this.automatize(rule)
        this.timeCount = 0
        this.showRows()
      })
      nlToArr(this.$refs.ruleSelectors.childNodes).map(x => {
        x.classList.remove('active')
      })
      event.target.classList.add('active')
    }
  },
  mounted() {
    this.randomizeFirstRow()
    this.automatize(this.rule150)
    this.$refs.ruleSelectors.childNodes[3].classList.add('active')
    this.showRows()
  }
}
</script>