import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [
      // {user: 'Russ'},
      // {user:'Bill'}
    ],
    results: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results
    },
    setMyCollection(state, payload) {
      console.log('3',payload)
      state.myTunes = payload
      console.log('4',state.myTunes)
    },
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        data = JSON.parse(data)
        commit('setResults', data.results)
      })
    },
    getMyTunes({ commit, dispatch }) {
      //send req to make song(test)
      var test = {name: 'tester'}
      console.log('2',test)
      //req returns as res which is songs collection(array)
      var songs = []
      songs.push(test, {name: "new2",artist: 'asdf',album:'asdf'})
      commit('setMyCollection', songs)
    },
    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
    },
    removeTrack({ commit, dispatch }, track) {
      //Removes track from the database with delete
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
