<template>
  <div>
    <user-header/>
    <div class="app__content">
      <sidebar/>
      Hello, User
    </div>
  </div>
</template>

<script>
import Sidebar from './navigation/Sidebar'
import UserHeader from './UserHeader/UserHeader'

export default {
  name: 'User',
  components: {
    Sidebar,
    UserHeader
  }
}
</script>

<style>

</style>
