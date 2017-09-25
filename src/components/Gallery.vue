<template lang="html">
<div class="gallery">
  <div class="menu">
    <div class="title"></div>
    <div class="options">
      
    </div>
  </div>
  <div class="image-container">
    <div v-for="i in gref" class="image-loop">
      <img class="image" v-bind:src="i.urls.fullsize">
    </div>
  </div>
</div>
</template>

<script>
// import InProgress from './subpage/InProgress.vue'
  import Firebase from 'firebase'

  var config = {
     apiKey: "AIzaSyDjJouOC4yv9B0_a-JZe7SS6-UxU3wVFiI",
     authDomain: "georgeplukov.firebaseapp.com",
     databaseURL: "https://georgeplukov.firebaseio.com",
     storageBucket: "georgeplukov.appspot.com"
  };

  let app = Firebase.initializeApp(config),
      database = app.database(),
      auth = app.auth(),
      storage = app.storage();

  let galleryReference= database.ref().child('gallery');
  export default {
    name: 'gallery',
    components:{
    },
    firebase: {
      gref: galleryReference,
    }
  }
</script>

<style scoped lang="css">
.gallery{
  overflow-x: hidden;
}

.menu{
  position: absolute;
  height: 100vh;
  width: 20%;
  margin-left:5%;
  background-color: rgba(255,255,255,1);
  border-left: 1px solid grey; 
  border-right: 1px solid grey;
}
.image-container{
  padding-top: 20vh;
  overflow-x: scroll;
  white-space: nowrap;

  /*margin-left: 25%;*/

}

.image-loop{
  display: inline-block;
}

.image{
  height: 60vh;

  margin-right:5px;
}
</style>
