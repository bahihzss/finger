<template>
  <header>
    <div class="container-fluid">
      <div class="header">
        <div class="logo-area">
          <img src="../../assets/logo.png" alt="Finger">
        </div>
        <div class="shortcut-area">
          <font-awesome-icon :icon="['far', 'comment']"/>
          <font-awesome-icon :icon="['far', 'heart']"/>
          <font-awesome-icon :icon="['far', 'share-square']"/>
        </div>
      </div>
      <search class="search-area"/>
    </div>
  </header>
</template>

<script>
import Search from './Search'

export default {
  name: 'HeaderArea',

  components: {Search},

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 5px 0;

  .header {
    overflow: hidden;

    .logo-area {
      float: left;

      img {
        width: 120px;
      }
    }

    .shortcut-area {
      float: right;
      font-size: 26px;
      padding-top: 6px;
      color: #888;

      > *:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .search-area {
    clear: both;
    width: 100%;
    margin-top: 15px;
  }
}
</style>

