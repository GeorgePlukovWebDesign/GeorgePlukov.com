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
body{
  margin:0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.lato-hairline {
  font-family: 'Lato', sans-serif;
  font-weight: 100;
}

.lato-norm {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
}
.lato-bold{
  font-family: 'Lato', sans-serif;
  font-weight: 600;
}
.raleway-medium{
  font-family: 'Raleway', sans-serif;
}
</style>
