<template lang="html">
  <div class="flex-container">
    <div class="raleway-medium">
      Currently
    </div>
    <div class="item">
      <span id="in" class="lato-hairline">In</span><span id="progress" class="lato-norm">Progress</span>
    </div>
    <div class="back raleway-medium">
      <router-link to="/">HOME</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "InProgress"
}
</script>

<style lang="css">
.flex-container{
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#in{
  font-size: 3.5em;
}
#progress{
  font-size: 3.5em;
}
.back{
  cursor: pointer;
}
</style>
