<template>
  <div class="wrap">
    <span
      v-for="str in localStrArr"
      v-html="str">
    </span>
    <span v-show="isTyping">|</span>
  </div>
</template>

<script>
export default {
  name: 'page1',
  props: ['status', 'index'],
  data() {
    return {
      current: 0,
      strArr: 'Vue-Fullpage'.split('').concat(['<br>', '{', '<br>']).concat('return'.split('')).concat(['&nbsp;&nbsp;']).concat('GoHi'.split('')).concat(['<br>', '}']),
      localStrArr: [],
      timer: null,
      timer2: null,
      isTyping: false,
    }
  },

  watch: {
    status() {
      if (this.status === 'leave' && this.index === 0) {
        this.typeIn()
        this.typeFlag()
      } else {
        clearInterval(this.timer)
        clearInterval(this.timer2)
        this.localStrArr = []
        this.isTyping = false
        this.current = 0
        this.timer = null
        this.timer2 = null
      }
    },
  },
  created() {
    console.log(this.index === 0 && this.status === '')
    if (this.index === 0 && this.status === '') {
      this.typeIn()
      this.typeFlag()
    }
  },
  methods: {
    typeFlag() {
      this.timer2 = setInterval(() => {
        this.isTyping = !this.isTyping
      }, 200)
    },
    typeIn() {
      this.timer = setInterval(() => {
        if (this.current < this.strArr.length) {
          this.localStrArr.push(this.strArr[this.current])
          this.current++;
        } else {
          clearInterval(this.timer)
          clearInterval(this.timer2)
          this.isTyping = false
        }
      }, 200)
    },
  },
}
</script>

<style scoped>
.wrap {
  position: absolute;
  bottom: 30px;
  left: 30px;
  font-size: 30px;
  font-weight: bold;
}
</style>
