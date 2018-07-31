<template>
  <div class="front-panel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'front-panel'
}
</script>

<style lang="scss" scoped>
.front-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: white;
}
</style>