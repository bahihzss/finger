<template>
  <div>
    <pickup-leader :leaders="leaders"/>
    <finger-list class="list" :fingers="fingers"></finger-list>
  </div>
</template>

<script>
import PickupLeader from './PickupLeader'
import FingerList from './FingerList'

export default {
  components: {PickupLeader, FingerList},

  name: 'content-area',

  data () {
    return {
      leaders: require('@/demo/leaders.js').default,
      fingers: require('@/demo/fingers.js').default
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin-top: 15px;
}
</style>