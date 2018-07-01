<template>
  <md-app class="page-container" md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <user-header/>
    </md-app-toolbar>

    <md-app-drawer md-permanent="full" class="user__sidebar">
      <user-sidebar/>
    </md-app-drawer>

    <md-app-content>
      <button @click="login">Spotify login</button>
    </md-app-content>
  </md-app>
</template>

<script>
import axios from 'axios'
import config from '../../config'

import UserSidebar from './navigation/UserSidebar'
import UserHeader from './UserHeader/UserHeader'

export default {
  name: 'User',
  components: {
    UserSidebar,
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

  .page-container {
    min-height: 100vh;
  }

  .user__sidebar {
    width: 250px;
  }

</style>
