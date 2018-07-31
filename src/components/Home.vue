<template>
  <div>
    <header-area></header-area>
    <content-area></content-area>
  </div>
</template>

<script>
import HeaderArea from './HeaderArea/Index'
import ContentArea from './ContentArea/Index'

export default {
  name: 'Home',
  components: {HeaderArea, ContentArea},
  data () {
    return {}
  }
}
</script>
