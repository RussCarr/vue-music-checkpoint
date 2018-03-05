<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header class="modal-header" id="modalTitle">
                    <slot name="header">{{user.name}} My Playlist
                        <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
                        <button type="button" @click="getMyCollection">Get My playlist</button>
                        <button type="button" @click="getUser">Sign In</button>
                    </slot>
                </header>
                <section class="modal-body" id="modalDescription">
                    <slot name="body">
                        <audio controls>
                            <!-- <source src="horse.ogg" type="audio/ogg"> -->
                            <!-- Your browser does not support the audio element. -->
                        </audio>
                        <hr>
                        <div class="card-playlist">
                            <ol>

                                <li class="row song-info track-info" v-for="track in tracks">
                                    <div class="col move-tracks">
                                        <button class="btn" @click="moveTrackPositionUp">up</button>
                                        <button class="btn" @click="moveTrackPositionDown">down</button>
                                        <button type="buttom" class="" @click='deleteTrack(track._id)'>delete</button>
                                    </div>
                                    <div class="col">
                                        <img :src='track.artworkUrl100'>
                                    </div>
                                    <div class="col song-info">
                                        <p class="song-position ">{{track.trackName}}</p>
                                        <p class="song-position ">{{track.artistName}}</p>
                                        <p class="song-position ">{{track.collectionName}}</p>
                                    </div>
                                    <hr>
                                </li>
                            </ol>
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
                // myTunes: {}
            }
        },
        // mounted: function () {
        //     this.$store.dispatch('getMyTunes')
        // },
        methods: {
            close() {
                this.$emit('close');
            },
            getUser() {
                console.log('getUserInfo')
                this.$store.dispatch('getUserInfo')
                console.log('getUserInfo2')

                console.log('getUserInfo3', user)

            },
            getMyCollection() {
                var userId = '5a9b62e3ec0e2a0f3404fdee'
                this.$store.dispatch('getMyTunes', userId)
            },
            moveTrackPositionUp(trackId) {
                this.$store.dispatch('removeTrack', 0)
            },
            moveTrackPositionDown(trackId) {
                this.$store.dispatch('removeTrack', 1)
            },
            deleteTrack(trackId) {
                this.$store.dispatch('removeTrack', trackId)
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

    .card-playlist {
        padding-bottom: 35px;
        /* position: relative; */
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        /* background-color: #fff; */
        background-clip: border-box;
        border-radius: .25rem;
    }

    .track-info {
        padding: 10px;
        border: 1px solid rgb(255, 255, 255);
        margin-right: 15px;
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
        margin-top: 30px;
        padding-bottom: 60px;
        display: flex;
        flex-direction: row;
        /* flex-direction: column; */
    }

    /* .song-info {
        width: 225px;
    } */
</style>