<template>
    <div class="my-tunes">
        <h1>List of MyTunes</h1>
        <p v-for="track in tracks">{{track.name}}</p>
    </div>
</template>

<script>
export default {
    name: 'My-Tunes',
    data () {
        return {
        //   myTunes: []
        }
    },
    props: {
        
    },
    
    computed: {
      tracks() {
        console.log('here')
        return this.$store.state.myTunes
      },
    },
}

</script>

<style>


</style>