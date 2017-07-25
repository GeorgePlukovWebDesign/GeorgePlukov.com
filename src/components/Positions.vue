<template lang="html">
  <div class="container2" style="">
    <h1 class="">
      <span class="lato-hairline">Work</span> <span class="lato-norm">Experience</span>
    </h1>
    <div class="flex-cont">
      <!-- <div v-if="loading"> test </div> -->
      <div v-for="pos in this.positions" class="position">
        <!-- row 1 -->
        <div class="row">

          <span class="position-employer lato-bold">{{ pos.employer | uppercase }}</span>
          |
          <span class="position-title lato-norm">
            {{pos.title}}
          </span>

        </div>
        <!-- row 2 -->
        <div class="row ">
          <span class="date raleway-medium">
            {{ pos.year }} | {{ pos.location }}
          </span>

        </div>
        <!-- row 3 -->
        <div class="row ">
          <span class="date raleway-medium">
            {{ pos.description }}
          </span>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'positions',
  data() {
    return {
      positions: {},
      loading: true
    }
  },
  created() {
    axios.get(`https://georgeplukov.firebaseio.com/positions.json`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.positions = response.data
        this.loading = false
      })
      .catch(e => {
        this.errors.push(e)
      })

  }
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
  margin-top: 0px;
  margin-bottom: 20px;
  font-size:1.4em;
  color:black;
}


.position-employer{
  font-size: 1em;
  line-height: normal;

}
.position-title{
}
.comp-name{
  /*lato-bol caps*/
}
.descriptor{
  /*raleway-medium*/
}
.date{
  font-size: .75em;
  color: #6A6A6A;
}
</style>
