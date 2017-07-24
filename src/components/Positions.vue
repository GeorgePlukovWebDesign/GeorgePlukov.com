<template lang="html">
  <div class="container2" style="">
    <h1 class="">
      <span class="lato-hairline">Work</span> <span class="lato-norm">Experience</span>
    </h1>
    <div class="flex-cont">
      <!-- <div v-for="pos in positions" class="position">
        <span class="position-employer lato-bold">
          {{pos.employer}}
        </span>
          |
        <span class="position-title">
          {{pos.title}}
        </span>

        <div class="">

        </div>
      </div> -->
    </div>
  </div>

</template>

<script>
// import Firebase from 'firebase'
// Setup Firebase
// var config = {
//   apiKey: "AIzaSyDjJouOC4yv9B0_a-JZe7SS6-UxU3wVFiI",
//   authDomain: "georgeplukov.firebaseapp.com",
//   databaseURL: "https://georgeplukov.firebaseio.com",
//   projectId: "georgeplukov",
//   storageBucket: "georgeplukov.appspot.com",
//   messagingSenderId: "639555083052"
// };
// //
// // var db = firebaseApp.database()
// let positionsRef;
// try {
//   let app = Firebase.initializeApp(config)
//   let db = app.database()
//   positionsRef = db.ref('positions')
// } catch (err) {
//   // we skip the "already exists" message which is
//   // not an actual error when we're hot-reloading
//   if (!/already exists/.test(err.message)) {
//     console.error('Firebase initialization error', err.stack)
//   }
// }




export default {
  name: 'positions',
  // firebase: {
  //   positions: positionsRef.limitToLast(20)
  // },
}
</script>

<style lang="css">
body{
  margin:0;
}

.container2{
  padding-left: 5%;
  padding-right: 5%;
  padding-top:40px;
  max-width:100%;
  height:100vh;
  margin:none;
}
h1{
  font-size: 2.5em;
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

.position-employer{
  font-size: 1.25em;
}


.position-title{
}
.comp-name{
  /*lato-bol caps*/
}
.descriptor{
  /*raleway-medium*/
}
.location{
  /*location raleway medium */
  color: #6A6A6A;
}
.flex-cont{
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height:100%;
}
.position{
  width:90%;
  margin-top: 10px;
  font-size:1.4em;
  color:black;
}
</style>
