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
          <button @click="showDetailz(movie)">add to Collection</button>
        </template>
      </div>
    </div>
   </div>

</template>

<script>
 
 export default {
    name: 'musicResults',
    data() {
      return {
      }
    },
    computed: {
      artists() {

        console.log('step 5')
        return this.$store.state.results
      },
    },
    // methods: {
    //   showDetailz(music){
    //     console.log('hello')
    //     this.$store.dispatch('setActiveMusic', music)
    //   }
    // },
    // components: {
    //   detailz: Detailz
    // },
  }

</script>

<style>
  collection{
    display: flex;
    align-self: flex-end;
    justify-content: center;
  }
</style>