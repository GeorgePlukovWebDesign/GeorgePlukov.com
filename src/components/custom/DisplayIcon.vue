<template lang="html">
  <div class="image-container">
    <img class="format" v-bind:src="imageurl" />
    <div class="after">
      <div class="text">
        {{text}}
      </div>
    </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'positions',
  props: ['imageurl', 'text'],
  data() {
    return {}
  },
  created() {


  },
  components: {

  }

};
</script>

<style lang="css">
.image-container {
    position: relative;



}
.image-container .after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    color: #FFF;
}
.text{
  text-align: center;
  vertical-align: middle;
  height: 100%;
  transform: translateY(48%);
}
.image-container:hover .after {
    display: block;
    background: rgba(0, 0, 0, .6);
}
.format{
  width:100%;

}



</style>
