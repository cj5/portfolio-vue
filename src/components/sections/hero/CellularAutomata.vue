<template>
  <div class="cellular-automata">
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
    </div>
    <div class="automata-selector">
      <a 
        href="https://mathworld.wolfram.com/ElementaryCellularAutomaton.html" 
        class="link-1" 
        target="_blank"
      >
        Cellular Automaton >
      </a>
      <div ref="ruleSelectors">
        <a 
          role="button" 
          class="link-1"
          @click="switchRule(rule73, $event)"
          @keyup.enter="switchRule(rule73, $event)"
          tabindex="0"
        >
          Rule 73
        </a>
        <a 
          role="button" 
          class="link-1"
          @click="switchRule(rule89, $event)"
          @keyup.enter="switchRule(rule89, $event)"
          tabindex="0"
        >
          Rule 89
        </a>
        <a 
          role="button" 
          class="link-1"
          @click="switchRule(rule126, $event)"
          @keyup.enter="switchRule(rule126, $event)"
          tabindex="0"
        >
          Rule 126
        </a>
        <a 
          role="button" 
          class="link-1"
          @click="switchRule(rule150, $event)"
          @keyup.enter="switchRule(rule150, $event)"
          tabindex="0"
        >
          Rule 150
        </a>
        <a 
          role="button" 
          class="link-1"
          @click="switchRule(rule183, $event)"
          @keyup.enter="switchRule(rule183, $event)"
          tabindex="0"
        >
          Rule 183
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { nlToArr } from '../../../helpers'

export default {
  name: 'CellularAutomata',
  props: {
    heroHt: Number
  },
  data() {
    return {
      cellSize: 10,
      rowWidth: 6000,
      timeCount: 0,
      timeInterval: 75,
      pattern: [],
    }
  },
  computed: {
    cellsPerRow() {
      return Math.ceil(this.rowWidth / this.cellSize)
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
    const rules = [
      this.rule73,
      this.rule89,
      this.rule126,
      this.rule150,
      this.rule183,
    ]

    const randIndex = Math.round(Math.random() * (rules.length - 1))

    this.randomizeFirstRow()
    this.automatize(rules[randIndex])
    this.$refs.ruleSelectors.childNodes[randIndex].classList.add('active')
    this.showRows()
  }
}
</script>