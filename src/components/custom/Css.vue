<template lang="html">
  <div class="container">
    <svg id="line-gallery" class="line" height="100" width="100">
      <line x1="0px" y1="10px" x2="10px" y2="10px"  />
        
    </svg>
  </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'positions',
  props: [],
  data() {
    return {}
  },
  created() {


  },
  components: {

  },
  computed: {
    // test(): "asd"
  }

};
</script>

<style scoped lang="css">

.container{
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  margin-bottom: 10%;
  width: auto;
  height: 60vh;
  /*background-color: red;*/
}
.line{
  color: blue;
  height: 100px;
}
.hexagon{

}

</style>
