<template>
  <div class="finger-list container-fluid">
    <div class="row">
      <div v-for="finger in fingers" class="col-md-6">
        <finger class="finger" :key="finger.id" :finger="finger"></finger>
      </div>
    </div>
  </div>
</template>

<script>
import Finger from './Finger'

export default {
  components: {Finger},

  name: 'finger-list',

  props: {
    fingers: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.finger {
  margin-bottom: 15px
}
</style>