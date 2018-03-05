import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'
import axios from 'axios'

var api = axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000
});

vue.use(vuex)

var store = new vuex.Store({
  state: {
    user: {
      id: '5a9b62e3ec0e2a0f3404fdee'

    },
    myTunes: [],
    results: []
  },
  // getters: {
  //   user: state =>{
  //     return state.user
  //   }
  // },

  mutations: {
    //getting data from state
    setResults(state, results) {
      state.results = results
    },
    setMyCollection(state, payload) {
      // console.log('3', payload)
      state.myTunes = payload
      // console.log('4', state.myTunes)
    },
    setActiveUser(state, payload) {
      state.user = payload
    },
    setMyTunes(state, payload) {
      state.myTunes = payload
    },
    //requesting data from database
    setUser(state, payload) {
      console.log("payload", payload)
      state.user = payload
    }
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
    getUserInfo({ commit, dispatch }) {
      // send req to make song(test)
      // var test = {name: 'tester'}
      // console.log('2',test)
      // req returns as res which is songs collection(array)
      var user = []
      user.push({ name: 'Russ', id: '5a9b62e3ec0e2a0f3404fdee', active: false })
      // api.get('user')
      //   .then(res => {
      console.log('Test', user)
      commit('setUser', user)
      //  })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    getMyTunes({ commit, dispatch }, payload) {
      console.log('getMyTunes1', payload)
      api.get(`users/${store.state.user.id}/collection`)
        .then(res => {
          console.log('getMyTunes2', res.data)
          commit('setMyCollection', res.data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    // setUser({ commit, dispatch }) {
    //   api.get('user')
    //   .then(res => {
    //     // if (!res.data.id == '5a9b62e3ec0e2a0f3404fdee')  {
    //     res.data = false }
    //       commit('getUserInfo', res.data)

    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    addToMyCollection({ commit, dispatch }) {
      // debugger
      api.post(`users/${store.state.user.id}/collection`)
        .then(response => {
          commit('setMyTunes', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    removeTrack({ commit, dispatch }, track) {
      api.delete(`users/${store.state.user.id}/collection/${track}`)
        .then(() => {
          api.get(`users/${store.state.user.id}/collection`)
            .then(res => {
              console.log('getMyTunes2', res.data)
              commit('setMyCollection', res.data)
            })
          console.log('deleted the track')
        })
        .catch(err => {
          console.log(err)
        })
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
