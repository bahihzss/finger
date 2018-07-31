<template>
  <div class="pickup-leader">
    <div class="container-fluid">
      <h1>注目のリーダー</h1>
    </div>
    <div class="leaders">
      <div class="leader" v-for="leader in leaders">
        <img :src="leader.img" :alt="leader.name">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pickup-leader',

  props: {
    leaders: {
      type: Array,
      default () {return []}
    }
  }
}
</script>

<style lang="scss" scoped>
.pickup-leader {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f0f0f0;
  padding: 15px 0;

  h1 {
    font-size: 14px;
    font-weight: bold;
  }

  .leaders {
    margin-top: 10px;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;

    .leader {
      img {
        display: block;
        width: 60px;
        margin-right: 10px;
        border-radius: 50%;
      }

      &:first-child {
        margin-left: 15px;
      }
    }
  }
}
</style>