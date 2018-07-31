<template>
  <div class="search">
    <input type="text">
    <font-awesome-icon class="icon" icon="search"/>
    <div class="sort">
      <span :class="[{active: order === 'new'}]" @click="order='new'">新着順</span>
      <span :class="[{active: order === 'genre'}]" @click="order='genre'">ジャンル順</span>
      <span :class="[{active: order === 'level'}]" @click="order='level'">レベル順</span>
      <span :class="[{active: order === 'purpose'}]" @click="order='purpose'">方針順</span>
      <span :class="[{active: order === 'area'}]" @click="order='area'">エリア順</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',

  data () {
    return {order: 'new'}
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;

  input {
    border: none;
    background-color: #f1f1dd;
    outline: none;
    padding-left: 2em;
    height: 30px;
    width: 100%;
  }

  .icon {
    position: absolute;
    left: 8px;
    top: 7px;
    color: #777;
  }

  .sort {
    padding: 5px 0;

    span {
      color: #888;
      font-size: 12px;
      margin-right: 5px;

      &.active {
        color: #2bad90;
      }
    }
  }
}
</style>