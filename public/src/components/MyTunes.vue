<template>
    <div class="my-tunes">
        <h1>List of MyTunes</h1>
        <p v-for="track in tracks"></p>
    </div>
</template>

<script>
export default {
    name: 'My-Tunes',
    data () {
        return {
            
        }
    },
    computed: {
      tracks() {
        return this.$store.state.myTunes
      },
    },
}

</script>

<style>


</style>