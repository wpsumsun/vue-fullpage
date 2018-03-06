<template>
  <div class="wrap" @wheel="wheelEvent($event)">
    <transition-group
      tag="div"
      :name="name"
      @enter="enterStatus"
      @leave="leaveStatus">
      <div
        class="page"
        v-for="(item, index) in pages"
        v-show="index === curIndex"
        :style="{ background: bgColor&&bgColor[index] ? bgColor[index] : baseBgC}"
        @transitionend="end"
        :key="item">
        {{ item }}
        <slot :name="'slot-'+index" :status="status" :curIndex="curIndex"></slot>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'fullpage',
    props: {
      pages: {
        type: Number,
        required: true,
      },
      bgColor: {
        type: Array
      },
      baseBgC: {
        default: '#c09',
      }
    },
    data() {
      return {
        curIndex: 0,
        name: '',
        canWheel: true,
        endCound: 0,
        status: '',
      }
    },
    methods: {
      enterStatus() {
        this.status = 'enter'
      },
      leaveStatus() {
        this.status = 'leave'
      },
      wheelEvent(e) {
        if (!this.canWheel) { return }
        this.canWheel = false
        if (e.deltaY > 0) {
          if (this.curIndex === (this.pages - 1)) {
            this.canWheel = true
            this.endCound = 0;
            return
          }
          this.name = 'down'
          this.curIndex++;
        }
        if (e.deltaY < 0) {
          if (this.curIndex === 0) {
            this.canWheel = true
            this.endCound = 0
            return
          }
          this.name = 'up'
          this.curIndex--;
        }
      },
      end() {
        this.endCound++;
        if (this.endCound === 2) {
          this.canWheel = true
          this.endCound = 0
        }
      },
    },
  }

</script>

<style>
  .page {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #c09;
  }

  .down-enter-active {
    transition: all 1s ease;
    transform: translateY(0);
  }

  .down-leave-active {
    transition: all 1s ease;
    transform: translateY(-100%);
  }

  .down-enter {
    transform: translateY(100%)
  }

  .down-leave {
    transform: translateY(0)
  }

  .up-enter-active {
    transition: all 1s ease;
    transform: translateY(0)
  }

  .up-leave-active {
    transition: all 1s ease;
    transform: translateY(100%);
  }

  .up-enter {
    transform: translateY(-100%)
  }

  .up-leave {
    transform: translateY(0)
  }
</style>
