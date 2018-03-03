<script>
    export default {
        name: 'my-tunes',

        mounted: function () {
            this.$store.dispatch('getMyTunes')
        },

        methods: {
            close() {
                this.$emit('close');
            }
        },
        computed: {
            tracks() {
                console.log('here')
                return this.$store.state.myTunes
            },
        }
    };
</script>
<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header class="modal-header" id="modalTitle">
                    <slot name="header">My Playlist<button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
                    </slot>
                </header>
                <section class="modal-body" id="modalDescription">
                    <slot name="body">
                        <!-- <h6 class="ml-5">
                            <span class="playlist-cats">Song</span class="playlist-cats">
                            <span class="playlist-cats">Artist</span>
                            <span class="playlist-cats">Album</span>
                        </h6> -->
                        <hr>
                        <div class="row song-info" v-for="track in tracks">
                            <div class="col-3">
                                <img src="http://placehold.it/30x30">
                                <div class="row">
                                    <div class="col move-tracks">
                                        <button class="" disabled="disabled">up</button>
                                        <button class="" disabled="disabled">down</button>
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div class="col-9">
                                <p class="song-position ml-4">{{track.name}}</p>
                                <p class="song-position ml-4">{{track.artist}}</p>
                                <p class="song-position ml-4">{{track.album}}</p>
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