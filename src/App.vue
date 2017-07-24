<template>
  <div id="app">
      <div class="container">
        <router-view></router-view>
      </div>

    </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
