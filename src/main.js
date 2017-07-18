
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var VueFire = require('vuefire')
var firebase = require('firebase')

// Setup Firebase
var config = {
    apiKey: "AIzaSyDjJouOC4yv9B0_a-JZe7SS6-UxU3wVFiI",
    authDomain: "georgeplukov.firebaseapp.com",
    databaseURL: "https://georgeplukov.firebaseio.com",
    projectId: "georgeplukov",
    storageBucket: "georgeplukov.appspot.com",
    messagingSenderId: "639555083052"
  };

var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

 // firebase binding
 // https://github.com/vuejs/vuefire
 firebase: {
   insta_post: db
 },
  template: '<App/>',
  components: { App }
})
