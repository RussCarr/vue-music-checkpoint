<template>
  <div class="musicResults">
    <div class="col-sm-6">
      <div class="col-sm-4" v-for='artist in artists'>
        <form @submit="addTrack(artist)">
          <template class='m-1'>
            <img :src='artist.artworkUrl30'>
            <p>{{artist.artistName}}</p>
            <p>{{artist.trackName}}</p>
            <p>Album: {{artist.collectionName}}</p>
            <p>Price $ {{artist.collectionPrice}}</p>
            <button>add to Collection</button>
          </template>
        </form>
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
      //   artist: {
      //     trackId: '',
      //     trackName: '',
      //     artistId: '',
      //     artistName: '',
      //     collectionId: '',
      //     collectionName: '',
      //     playlistNumber: '',
      //     artworkUrl30: '',
      //     }
      }
    },
    methods: {
      addTrack(artist) {
        // var artist = {
        //   // trackId: artist.trackId,
        //   {{artist.trackName}}
        //   // artistId: artist.artistId,
        //   artistName: artist.artistName,
        //   // collectionId: artist.collectionId,
        //   collectionName: artist.collectionName,
        //   // playlistNumber: artist.playlistNumber,
        //   artworkUrl30: artist.artworkUrl30,
        // }
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