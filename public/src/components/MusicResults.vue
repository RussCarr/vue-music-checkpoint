<template>
  <div class="musicResults">
    <div class="col-sm-12">
      <div class="row">
        <div class="col-sm-4" v-for='artist in artists'>

          <template class='m-1'>
            
            <div class="card text-center" style="width: 18rem;">
              <img class="card-img-top" :src='artist.artworkUrl100' alt="Picture of ${artist}">
              <div class="card-body">
                <h5 class="card-title">{{artist.artistName}}</h5>
                <p class="card-subtitle mb-2 text-muted">{{artist.trackName}}</p>
                <p class="card-text">
                  <span class="threeLines">Album: {{artist.collectionName}}</span>
                </p>
                <p class="card-text">Price $ {{artist.collectionPrice}}</p>
                <audio controls>
                  <source :src='artist.previewUrl' type="audio/mpeg "> Your browser does not support HTML5 video.
                  </audio>
                  <button @click="addTrack(artist)">add to Collection</button>
                <div>
                </div>
              </div>
            </div>
            
            <!-- <img :src='artist.artworkUrl30'>
              <p>{{artist.artistName}}</p>
              <p>{{artist.trackName}}</p>
              <p>Album: {{artist.collectionName}}</p>
              <p>Price $ {{artist.collectionPrice}}</p> -->
            </template>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
  import MyTunes from './MyTunes.vue'
  export default {
    name: 'musicResults',
    data() {
      return {
      }
    },
    methods: {
      addTrack(artist) {
        console.log(artist, 'artist')
        this.$store.dispatch('addToMyCollection', artist)
      }
    },

    components: {
      MyTunes
    },
    computed: {
      artists() {
        return this.$store.state.results
      },
    },
  }

</script>

<style>
  collection {
    display: flex;
    align-self: flex-end;
    justify-content: center;
  }
</style>