<template>
  <div>
    <user-header/>
    <div class="app__content">
      <sidebar/>
      <button @click="login">Spotify login</button>
      Hello, User
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config'

import Sidebar from './navigation/Sidebar'
import UserHeader from './UserHeader/UserHeader'

export default {
  name: 'User',
  components: {
    Sidebar,
    UserHeader
  },
  data () {
    return {

    }
  },
  methods: {
    login () {
      axios.get(`${config.SERVER}/login`)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log('error', error)
        })
    }
  }
}
</script>

<style>

</style>
