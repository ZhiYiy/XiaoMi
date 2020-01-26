<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>
  import storage from './storage'
  export default {
    name: 'app',
    mounted() {
      // storage.setItem('abc',{a:1},'user')

      storage.clear('a','user')
    }
  }
</script>