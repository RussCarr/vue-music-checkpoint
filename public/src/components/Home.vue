<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <!-- <itunes class="itunes"></itunes> -->
    <!-- <my-tunes class="my-tunes"></my-tunes> -->

    <div class="container">
      <div class="row ">
        <div class="col-lg-12 header">
          <h1>Jive Now!</h1>
          <div class="searchBar">
            <nav class="navbar navbar-light bg-light">
              <form @submit.prevent="getArtist">
                <input type="text" v-model="artist" placeholder="Artist Name">
                <button type="submit">get Music</button>
                <!-- <div id="app"> -->
                <!-- </div> -->
                <!-- <button @click="getMyCollection"></button> -->
              </form>
              <button type="button" @click="showModal">Open playlist</button>
              <my-tunes v-show="isModalVisible" @close="closeModal" />
            </nav>

          </div>
        </div>

      </div>
      <div class="row ">
        <div class="col-6-12 section">
        </div>
        <MusicResults class="row"></MusicResults>
      </div>
      <Bottom></Bottom>
    </div>

  </div>
</template>

<script>

  // import Itunes from './Itunes.vue'
  import MusicResults from './MusicResults'
  import Bottom from './Bottom'
  import MyTunes from './MyTunes'
  export default {
    name: 'Home',
    data() {
      return {
        artist: '',
        isModalVisible: false,
      }
    },
    components: {
      // Itunes,
      // MyTunes,
      MusicResults,
      Bottom,
      MyTunes
    },
    computed: {
      music() {
        return this.$store.state.setResults
      },
      
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      getArtist() {
        this.$store.dispatch('getMusicByArtist', this.artist)
      },
      getMyCollection() {
        this.$store.dispatch('getMyTunes', this.userId)
      },
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
    color: white;
  }

  .footer {
    height: 200px;
    background: linear-gradient(yellow, red);
    color: black;
  }

  .section {
    background: white;
    color: red;
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
    height: 100px;
  }

  .col-sm-4 {
    margin-bottom: 2rem;
  }
</style>