<template>
  <div class="cell-wrap">
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
</template>

<script>
export default {
  name: 'CellularAutomata',
  props: {
    heroHt: Number
  },
  data() {
    return {
      cellSize: 10,
      timeCount: 0,
      timeInterval: 100,
      pattern: [],
    }
  },
  computed: {
    cellsPerRow() {
      return Math.ceil(window.innerWidth / this.cellSize)
    },
    rows() {
      return Math.ceil(this.heroHt / this.cellSize)
    }
  },
  methods: {
    arraysEqual(a, b) {
      if (a === b) return true
      if (a == null || b == null) return false
      if (a.length != b.length) return false

      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
      }
      return true
    },
    rule150() {
      return this.arraysEqual(this.pattern, ['true', 'true', 'true']) ||
      this.arraysEqual(this.pattern, ['true', 'false', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'true', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'false', 'true'])
    },
    rule126() {
      return this.arraysEqual(this.pattern, ['true', 'true', 'false']) ||
      this.arraysEqual(this.pattern, ['true', 'false', 'true']) ||
      this.arraysEqual(this.pattern, ['true', 'false', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'true', 'true']) ||
      this.arraysEqual(this.pattern, ['false', 'true', 'false']) ||
      this.arraysEqual(this.pattern, ['false', 'false', 'true'])
    },
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
  },
  mounted() {
    const nlToArr = el => Array.prototype.slice.call(el)
    nlToArr(this.$refs.cellRow[0].childNodes).map(x => {
      let rand = Math.round(Math.random())
      x.classList.add(rand === 0 ? 'false' : 'true')
    })
    for (let i = 1; i < this.rows; i++) {
      for (let j = 0; j < this.cellsPerRow; j++) {
        if (j > 0 && j < this.cellsPerRow - 1) {
          this.pattern.push(this.$refs.cellRow[i - 1].childNodes[j - 1].className)
          this.pattern.push(this.$refs.cellRow[i - 1].childNodes[j].className)
          this.pattern.push(this.$refs.cellRow[i - 1].childNodes[j + 1].className)
        } else if (j === 0) {
          this.pattern.push('false')
          this.pattern.push(this.$refs.cellRow[i - 1].childNodes[j].className)
          this.pattern.push(this.$refs.cellRow[i - 1].childNodes[j + 1].className)
        } else if (j === this.cellsPerRow - 1) {
          this.pattern.push(this.$refs.cellRow[i - 1].childNodes[j - 1].className)
          this.pattern.push(this.$refs.cellRow[i - 1].childNodes[j].className)
          this.pattern.push('false')
        }
        if (this.rule126()) {
          this.$refs.cellRow[i].childNodes[j].classList.add('true')
        } else {
          this.$refs.cellRow[i].childNodes[j].classList.add('false')
        }
        this.pattern = []
      }
    }
    for (let i = 0; i < this.rows; i++) {
      setTimeout(() => this.$refs.cellRow[i].classList.add('show'), this.timeCount)
      this.timeCount = this.timeCount + this.timeInterval
    }
  }
}
</script>