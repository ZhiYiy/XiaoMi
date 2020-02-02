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
      // TODO 本地
      // this.axios.get('/mock/user/login.json')
      // .then(res=>{
      //   this.res = res
      //   console.log(res )
      // })
      // TODO Easy Mock
      this.axios.get('/mock/user/login.json')
              .then(res=>{
                this.res = res
                console.log(res )
              })
    }
  }
</script>
<style lang="scss">
  @import './assets/scss/reset.scss';
  @import './assets/scss/config.scss';
</style>