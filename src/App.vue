<template>
  <div id="app">
    <transition-group tag="div">
      <div
        class="page"
        v-for="item in 4"
        :style="{ background: item }"
        :key="item">
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
.page {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #c09;
}

</style>
