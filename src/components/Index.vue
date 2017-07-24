<template lang="html">
  <div id="app">
    <div class="block">
      <div class="name">
        <span class="lato-hairline">George </span><span class="lato-norm">Plukov</span>
      </div>
      <div class="menu raleway">
        <router-link class="" @mouseover.native="mouseOver(0)" v-on:mouseleave="mouseLeave(0)" to="/gallery">Gallery</router-link>
        <router-link class="" @mouseover.native="mouseOver(1)" v-on:mouseleave="mouseLeave(1)" to="/positions">Positions</router-link>
        <router-link class="" @mouseover.native="mouseOver(2)" v-on:mouseleave="mouseLeave(2)" to="/projects">Projects</router-link>

        <!-- <a v-on:mouseover="mouseOver(2)" v-on:mouseleave="mouseLeaveButton(2)" href="#">
                  Projects
                </a> -->


      </div>
      <transition name="slide-fade">

        <div v-if="current_active != -1" class="preview">

          <div class="lineblock">
            <!--  -->
            <!-- GALLERY PREVIEW -->
            <!--  -->
            <svg v-show="current_active == 0" id="line-gallery" class="line" height="10" width="100%">
              <line x1="0px" y1="10px" x2="2em" y2="10px"  />
              <line class="lighter" x1="2em" y1="10px" x2="2.5em" y2="0px" />
              <line class="lighter" x1="2.5em" y1="0px" x2="3em" y2="10px" />
              <line x1="3em" y1="10px" x2="83%" y2="10px" />
            </svg>
            <!-- Gallery display box -->
            <div class="" v-show="current_active == 0" v-on:mouseleave="mouseLeave(0)">
              <template v-for="image in gallery">
                <img class="preview-image" v-bind:src="image.url" v-bind:alt="image.title"  ></img>
              </template>
            </div>

            <!--  -->
            <!-- Positions PREVIEW -->
            <!--  -->
            <svg v-show="current_active == 1" id="line-blog" class="line" height="10" width="100%">
              <line x1="0px" y1="10px" x2="7em" y2="10px"  />
              <line class="lighter" x1="7em" y1="10px" x2="7.5em" y2="0px" />
              <line class="lighter" x1="7.5em" y1="0px" x2="8em" y2="10px" />
              <line x1="8em" y1="10px" x2="83%" y2="10px" />
            </svg>
            <div class="" v-show="current_active == 1" v-on:mouseleave="mouseLeave(1)">
              <template v-for="pos in positions">
                <!-- <img class="preview-image" v-bind:src="pos.image_url" v-bind:alt="pos.title"></img> -->

              </template>
            </div>

          <!--  -->
          <!-- Projects PREVIEW -->
          <!--  -->
          <svg v-show="current_active == 2" id="line-blog" class="line" height="10" width="100%">
            <line x1="0px" y1="10px" x2="13em" y2="10px"  />
            <line class="lighter" x1="13em" y1="10px" x2="13.5em" y2="0px" />
            <line class="lighter" x1="13.5em" y1="0px" x2="14em" y2="10px" />
            <line x1="14em" y1="10px" x2="83%" y2="10px" />
          </svg>
          <div class="" v-show="current_active == 2" v-on:mouseleave="mouseLeave(2)">
            <template v-for="proj in projects">
              <!-- <img class="preview-image" v-bind:src="proj.image_url" v-bind:alt="proj.title"></img> -->
              <div class="proj-card">
                <div class="proj-title">
                  {{proj.title}}
                </div>
                <!-- <img class="proj-img" v-bind:src="proj.image_url" v-bind:alt="proj.title"></img> -->
                <!-- <a v-bind:href="{{proj.github_url}}"> -->
              <!-- </a> -->
                <div class="proj-desc">
                  {{proj.description}}
                </div>
                <a v-bind:href="proj.github_url">
                  <img src="../assets/Github-Mark-120px.png" alt="github icon" class="github-icon"></img>
                </a>
                <div class="languages">
                  {{proj.languages}}
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      </transition>
  </div>
</div>

</template>

<script>
import Firebase from 'firebase'
// Setup Firebase
var config = {
  apiKey: "AIzaSyDjJouOC4yv9B0_a-JZe7SS6-UxU3wVFiI",
  authDomain: "georgeplukov.firebaseapp.com",
  databaseURL: "https://georgeplukov.firebaseio.com",
  projectId: "georgeplukov",
  storageBucket: "georgeplukov.appspot.com",
  messagingSenderId: "639555083052"
};
//
// var db = firebaseApp.database()

let galleryRef
let positionsRef
let projectsRef
try {
  let app = Firebase.initializeApp(config)
  let db = app.database()
  galleryRef = db.ref('gallery')
  positionsRef = db.ref('positions')
  projectsRef = db.ref('projects')
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export default {
  name: 'app',
  data() {
    return {
      current_active: -1,
      continue: false,
      insta_data: null
    }
  },
  firebase: {
    gallery: galleryRef.limitToLast(3),
    positions: positionsRef.limitToLast(3),
    projects: projectsRef.limitToLast(3)
  },
  methods: {
    mouseOver: function(num) {
      this.current_active = num
    },
    mouseLeaveButton: function(num) {
      setTimeout(function() {
        this.current_active = -1
      }, 50)
    },
    mouseLeave: function(num) {
      this.current_active = -1
    }
  }
}
</script>

<style>
.block {
  margin-top: 28vh;
  margin-left: 17%;
}

.name {
  font-size: 5em;
  user-select: none;
}

.menu {
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: #333;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 1.2em;
}


.lato-hairline {
  font-family: 'Lato', sans-serif;
  font-weight: 100;
}

.lato-norm {
  font-family: 'Lato', sans-serif;
  font-weight: 300;
}

.raleway {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

iew {
  height: 30vh;
}

line {
  // color:grey;
  stroke: grey;
  stroke-width: 1;
}

.lighter {
  stroke-width: 0.5;
}

.slide-fade-enter-active {
  transition: all 0.4s;
}

.slide-fade-leave-active {
  transition: all 0.2s;
}
.slide-fade-enter {
  transform: translateY(40%);
  opacity: 0;
}

.slide-fade-leave-to {
  opacity: 0;
}

.item-box {
  display: inline-block; // max-height: 10vh;
  height: auto;
  width: 25%; // max-height: 150px;
  margin-left: 10px;
  margin-right: 5px;
  border: 1px solid #d1d5da;
  border-radius: 10px;
}
.preview-image{
  border: 1px solid #d1d5da;
  display: inline-block;
  height: auto;
  max-width: 26%;
  min-width: 26%;

  border-radius: 10px;
  margin-left: 10px;
  margin-right: 5px;
  min-height: 200px;
  min-width:200px;
}


/*




  icon  color: #586069;
  titile   color: #0366d6;
*/
/*#REPLACE WITH FLEXBOX*/
.proj-card{
  border: 1px solid #d1d5da;
  display: inline-block;
  height: auto;
  max-width: 26%;

  min-height: 120px;
  min-width: 120px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 5px;
  padding: 15px;
}

.proj-title {
  display: inline-block;
  width:80%;
  color: #0366d6;
  font-family: Arial;
}
.proj-img{
  display: inline-block;

  width:50%;
  height:auto;
}
.languages{
  float:right;
  vertical-align: middle;
  display: inline-block;
  /*font-size:*/
  color:#333;
  font-family: Arial;
}
.proj-desc {
  margin-top: 8px;
  margin-bottom: 16px;
  display: inline-block;
  font-family: sans-serif;
  line-height: 1.5;
  font-size: 12px;
  color: #586069;
}
.github-icon{
  width:30px;
  height: 30px;
  cursor: pointer;
}
.proj-links {
  color: #586069;
}

.underline:hover {
  text-decoration: underline;
  color: #0366d6;
}

.font-bold {
  font-weight: 600;
}

.gallery {}
</style>
