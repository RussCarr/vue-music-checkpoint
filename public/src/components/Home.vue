<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <!-- <itunes class="itunes"></itunes> -->
    <!-- <my-tunes class="my-tunes"></my-tunes> -->
    <!-- <musicResults></musicResults> -->
    <div class="container">
        <div class="row ">
            <div class="col-lg-12 header">
                <h1>Jive Now!</h1>
                <div class="searchBar">
                    <nav class="navbar navbar-light bg-light">
                        <form class="form-control" @click="getResults">
                            <input class="form-control mr-sm-2" type="search" onfocus="this.value=''" name="artist" placeholder="Artist Name" aria-label="Search">
                            <button class="btn btn-outline-alert my-2 my-sm-0" type="submit" >get Music</button>
                        </form>
                    </nav>

                    </form>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="col-6-12 section">
            </div>
            <div class="row" id="musicResults">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 footer copyright">
                <h5>©ResearchDrivenMarketing 2018</h5>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import MyTunes from './MyTunes.vue'
// import Itunes from './Itunes.vue'
// import MusicResults from './MusicResults'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  components: {
    // Itunes,
    // MyTunes,
    // MusicResults
  }
}
</script>


<style>
/* .my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: green;
}

.itunes{
  display: inline-block;
  background: red;
  min-height: 500px;
  min-width: 45%;
} */
body {
    background: black;
  }
  
  .container {
    background: white;
  } 
  
   .header {
    height: 200px;
    background: linear-gradient(red, yellow);
    text-color: white;
  }
  
  .footer {
    height: 200px;
    background: linear-gradient(yellow, red);
    text-color: black;
  } 
  
   .section {
    background: white;
    text-color: red;
    text-align: center;
    height: 8rem;
  }
  
  .searchBar {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;
    text-align: center;
  }
  
  .form-control {
    display: flex;
  }
  
  h1 {
    text-align: center;
    font-size: 9rem;
  }
  
  .copyright {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  
  .card {
    margin: 0;
    width: 21rem !important;
  }
  
  .card-text {
    text-align: left;
  } 
  
  #musicResults {
    margin-left: 0;
    margin-right: 0;
  }
  
   img {
    height: 300px;
  }
  
  .col-sm-4 {
    margin-bottom: 2rem;
  }
</style>
