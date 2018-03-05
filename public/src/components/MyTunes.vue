<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header class="modal-header" id="modalTitle">
                    <slot name="header">{{user.name}} My Playlist
                        <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
                        <button type="button" @click="getMyCollection">Open playlist</button>
                        <button type="button" @click="getUser">Sign In</button>
                    </slot>
                </header>
                <section class="modal-body" id="modalDescription">
                    <slot name="body">
                        <audio controls>
                            <!-- <source src="horse.ogg" type="audio/ogg"> -->
                            <!-- Your browser does not support the audio element. -->
                        </audio>
                        <!-- <h6 class="ml-5">
                            <span class="playlist-cats">Song</span class="playlist-cats">
                            <span class="playlist-cats">Artist</span>
                            <span class="playlist-cats">Album</span>
                        </h6> -->
                        <hr>
                        <div class="row song-info" v-for="track in tracks">
                            <div class="col-3">
                                <img :src='track.artworkUrl30'>
                                <div class="row">
                                    
                                    <div class="col move-tracks">
                                        <button class="" @click="">up</button>
                                        <button class="" @click='deleteTrack(track._id)'>delete</button>
                                        <button class="" @click="">down</button>
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div class="col-9">
                                <p class="song-position ml-4">{{track.trackName}}</p>
                                <p class="song-position ml-4">{{track.artistName}}</p>
                                <p class="song-position ml-4">{{track.collectionName}}</p>
                            </div>
                        </div>

                    </slot>
                </section>
                <footer class="modal-footer">
                    <slot name="footer">
                        <button type="button" class="btn" @click="close" aria-label="Close modal">Close me!</button>
                    </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'my-tunes',
        data() {
            return {
                artist: '',
                isModalVisible: false,
                // songId: '',
                // userId: '',
                // userName: '',
                myTunes: {}
            }
        },
        mounted: {

        },

        methods: {
            close() {
                this.$emit('close');
            },
            getUser() {
                console.log('getUserInfo')
                this.$store.dispatch('getUserInfo')
                console.log('getUserInfo2')
                
                console.log('getUserInfo3',user)
                
            },
            getMyCollection() {
                var userId = '5a9b62e3ec0e2a0f3404fdee'
                this.$store.dispatch('getMyTunes', userId)
            },
            moveTrackPositionUp(arr, upIndex) {
                var element = arr.indexOf[upIndex];
                arr.splice(fromIndex, 1);
                arr.splice(toIndex, 0, element);
            },
            moveTrackPositionDown(arr, downIndex) {
                var element = arr[fromIndex];
                arr.splice(fromIndex, 1);
                arr.splice(toIndex, 0, element);
            },
            deleteTrack(trackId){
                this.$store.dispatch('removeTrack',trackId)
            }
        },

        computed: {
            tracks() {
                console.log('here')
                return this.$store.state.myTunes
            },
            user() {
                console.log('yeay')
                return this.$store.state.user
            }
        }

    };
</script>
<style>
    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .5s ease;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .modal {
        background: black;
        box-shadow: 2px 2px 20px 1px;
        /* overflow-x: auto; */
        display: flex;
        align-self: center;
        flex-direction: column;
        width: 350px;
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: white;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
        overflow-y: auto;
    }

    .btn-close {
        border: none;
        font-size: 20px;
        /* padding: 10px; */
        cursor: pointer;
        font-weight: bold;
        color: red;
        background: transparent;
    }

    .btn {
        color: white;
        background: red;
        border: 1px solid red;
        border-radius: 2px;
    }

    .playlist-cats {
        margin-right: 3rem;
    }

    .hr {
        border-color: red
    }

    .song-position {
        display: flex;
        justify-content: flex-start
    }

    /* .song-artist {
        display: flex;
        justify-content: center;

    }

    .song-album {
        display: flex;
        justify-content: flex-end;

    } */

    .move-tracks {
        display: flex;
        flex-direction: row;
    }

    /* .song-info {
        width: 225px;
    } */
</style>