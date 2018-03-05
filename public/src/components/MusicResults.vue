<template>
  <div class="musicResults">
    <div class="col-sm-6">
      <div class="col-sm-4" v-for='artist in artists'>

        <template class='m-1'>
          <img :src='artist.artworkUrl30'>
          <p>{{artist.artistName}}</p>
          <p>{{artist.trackName}}</p>
          <p>Album: {{artist.collectionName}}</p>
          <p>Price $ {{artist.collectionPrice}}</p>
          <button @click="addTrack(artist)">add to Collection</button>
        </template>

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