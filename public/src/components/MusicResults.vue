<template>
  <div class="musicResults">

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
      music() {
        return this.$store.state.searchResults
      },
    },
    methods: {
      showDetailz(music){
        console.log('hello')
        this.$store.dispatch('setActiveMusic', music)
      }
    },
    components: {
      detailz: Detailz
    },
  }

</script>

<style>

</style>


