<template lang="html">
  <div class="container">

    <div class="header">
      <span id='username'>{{  (loggedIn) ? user.displayName : "N/A" }}</span>
      <span id='login'>
        <button id='google' v-on:click="googleLogin()" class='idp-button'>Sign in with Google</button>
      </span>
      <button id='logout' v-on:click="logout()" class='idp-button'>Sign out</button>
    </div>

    <div class="body">
      <el-row>
        <el-col :span="8" class="column left">
          <div class="form-title">
            <h3>File Upload</h3> 
          </div>
          <el-form ref="form" :model="image" label-width="120px">
            <el-form-item label="Image Title">
               <el-input v-model="image.imagename"></el-input>
            </el-form-item>

            <el-form-item label="Image Desc">
               <el-input v-model="image.description"></el-input>
            </el-form-item>
            <el-form-item label="Image Location">
               <el-input v-model="image.location.name"></el-input>
            </el-form-item>
            <el-form-item label="Activity time">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="Pick a Location" v-model="image.long" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="image.lat" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <div class="file-upload">

              <span>
                <h4> Thumbnail</h4>
                <input type="file" id="thumbnail" name="thumbnail" @change="handleUploadThumbnail($event)"/>
              </span>

              <span>
                <h4> Fullsize</h4>
                <input type="file" id="fullsize" name="fullsize" @change="handleUploadFullsize($event)"/>
              </span>

            </div>

            <el-button type="primary" v-on:click="submitPhoto()" >Send <i class="el-icon-upload el-icon-right"></i></el-button>
          </el-form>
        </el-col>
        <el-col :span="16" class="column right">
          <div class="preview">
            <img class="img" v-bind:src="image.urls.thumbnail">
          </div>
        </el-col>
      </el-row>
     <!--   <div class="preview-container">
         <h3>File Preview</h3>

       <div class="photoview" >
          <img v-model="urlList" v-for="url in urlList" class="img-preview" v-bind:src="url" alt="">
        </div> 
      </div>-->
      
    </div>

      


    <div class="footer">
      
    </div>
  </div>

</template>

<script>


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

  let chatReference= database.ref().child('chat');

  export default {
    name: 'upload',
    data() {
      return {
          user: {},
          loggedIn: false,
          image: {
            name:'',
            location: {
              "long": '',
              "lat": ''
            },
            urls:{
              "thumbnail": '',
              "fullsize": ''
            }
          },
          file: "",
          urlList: []
          // shallWeUseVuex: require('../../variable.js')
      }
    },
    firebase: {
      chat: chatReference,
    },
    created() {
      this.user = app.auth().currentUser; 
      if(this.user) { 
        this.name = this.user.displayName; 
        this.email = this.user.email; 
        this.photo = this.user.photoURL; 
        this.userId = this.user.uid; 
      } 

      // Watch to see if the user changes at any point
      app.auth().onAuthStateChanged((user) => {
        if(user) {
          this.user = user;
          this.loggedIn = true;
        } else {
          this.user = {};
          this.loggedIn = false;
          // this.$router.push('/upload')
        }
      });
    },
    methods: {
      googleLogin: function (){
        auth.signInWithPopup(new Firebase.auth.GoogleAuthProvider());
      },
      logout: function(){
        auth.signOut();
      },
      setUsername: function (newName){
        this.username = newName; 
      },
      handlePreview: function (){ 
        alert('asd')
      },
      handleRemove:  function (){},
      submitPhoto: function (){},
      handleUploadThumbnail: function(e){
        var file = e.target.files[0];
        var storageRef = storage.ref().child('images/fullsize');
        var photoRef = storageRef.child(file.name);
        var self = this
        var uploadTask = photoRef.put(file);
        uploadTask.on('state_changed', null, null, function() {
          var downloadUrl = uploadTask.snapshot.downloadURL;
          self.image.urls.thumbnail = downloadUrl
        });
      },
       handleUploadFullsize: function(e){
        var file = e.target.files[0];
        var storageRef = storage.ref().child('images/thumbnail');
        var photoRef = storageRef.child(file.name);
        var self = this
        var uploadTask = photoRef.put(file);
        uploadTask.on('state_changed', null, null, function() {
          var downloadUrl = uploadTask.snapshot.downloadURL;
          self.image.urls.thumbnail = downloadUrl
        });
      }
    },
  
  }

</script>

<style scoped lang="css">
.container{
  width: 100%;
  height: 100vh;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

}

/**** HEADER ****/
.header{
  width:100%;

}


.title{

}

/**** BODY ****/
.body{
  /*width: 50%;*/
  
}
.column{
  padding-left: 20px;
  padding-top:20px;
  padding-bottom:20px;
}
.left{

}
.right{

}
.form-title{}
.form{}
.line{}
.file-upload{
  margin-bottom: 10px;

}
.photoview{
  margin-top: 10px;
  border-radius: 10px;
  border: 1px dashed grey;
}
.img{
  height: 60vh;
  padding-top: 10vh; 
  padding-left: 20px;
}
/**** FOOTER ****/
.footer{}

</style>
