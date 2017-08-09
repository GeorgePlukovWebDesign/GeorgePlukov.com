<template lang="html">
  <carousel class="container" :perPage="1" :autoplayHoverPause="true" :autoplay="true" :autoplayTimeout="400"
  :speed="400" :paginationEnabled="true">
      <slide v-for="url in gallery['-KpLafFrMT8aq099iWEc']['images']">
        <img class="image" v-bind:src="url" alt="gallery['-KpLafFrMT8aq099iWEc']['title']" >
      </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';

export default {
  name: 'positions',
  data() {
    return {
      gallery: {},
      loading: true
    }
  },
  created() {
    axios.get(`https://georgeplukov.firebaseio.com/gallery.json`)
      .then(response => {
        this.gallery = response.data
        this.loading = false
      })
      .catch(e => {
        this.errors.push(e)
      })

  },
  components: {
    Carousel,
    Slide
  }

};
</script>

<style lang="css">
.container{
  width:400px;
  /*background-color: red;*/
}
.image{
  width:100%;
  height: auto;
}
.VueCarousel-wrapper{
    z-index: -1;
}
.VueCarousel-pagination{
  margin-top: -60px;
}
.VueCarousel-dot--active{

}
</style>
