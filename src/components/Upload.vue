<template lang="html">
  <div class="container">

    <div class="header">
      <label for='username'><img src="https://www.gstatic.com/images/icons/material/system/1x/account_box_black_24dp.png" width="24"/></label>
      <span id='username'>{{  (loggedIn) ? user.displayName : "N/A" }}</span>
      <span id='login'>
        <button id='google' v-on:click="googleLogin()" class='idp-button'>Sign in with Google</button>
      </span>
      <button id='logout' v-on:click="logout()" class='idp-button'>Sign out</button>
    </div>

    <div class="body">
      <div class="form-title">
        
      </div>
      <el-form ref="form" :model="image" label-width="120px">
          <el-form-item label="Image name">
             <el-input v-model="image.imagename"></el-input>
          </el-form-item>

          <el-form-item label="Image description">
             <el-input v-model="image.description"></el-input>
          </el-form-item>
          <el-form-item label="Image Location Name">
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
          <div>
           <input type="file" id="file" name="file" @change="handleUpload"/>
          </div>

          <el-button type="primary" v-on:click="submitPhoto()" >Send <i class="el-icon-upload el-icon-right"></i></el-button>
      </el-form>

      <div class="photoview" >
          <img v-model="urlList" v-for="url in urlList" class="img-preview" v-bind:src="url" alt="">
      </div>
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
            location: {},
          },
          file: "",
          urlList: ["https://i.imgur.com/htA8w4F.jpg", "",""]
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
      handleUpload: function(e){
        var file = e.target.files[0];

        var storageRef = storage.ref().child('chat_photos');
        // Get a reference to store file at photos/<FILENAME>.jpg
        var photoRef = storageRef.child(file.name);


        var self = this
        // Upload file to Firebase Storage
        var uploadTask = photoRef.put(file);
        uploadTask.on('state_changed', null, null, function() {
          // When the image has successfully uploaded, we get its download URL
          var downloadUrl = uploadTask.snapshot.downloadURL;
          // console.log(downloadUrl)/
          // Set the download URL to the message box, so that the user can send it to the database
          // this.downloadUrl = downloadUrl;
          (self.urlList).push(downloadUrl)
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
  width: 50%;
  margin: 0 auto;
  
}
.form-title{}
.form{}
.line{}
.photoview{
  margin-top: 10px;
  border-radius: 10px;
  border: 1px dashed grey;
}
.img-preview{
  height: 150px;
  margin: 10px 10px;
}
/**** FOOTER ****/
.footer{}

</style>
