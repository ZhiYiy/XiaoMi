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
      this.getUser()
      this.getCartCount()
    },
    methods:{
      getUser(){
        this.axios.get('/user').then((res={})=>{
          // 保存到 vuex
          this.$store.dispatch('saveUserName',res.username);
        })
      },
      getCartCount(){
        this.axios.get('/carts/products/sum').then((res=0)=>{
          // 保存到 vuex
          this.$store.dispatch('saveCartCount',res);
        })
      }
    }
  }
</script>
<style lang="scss">
  @import './assets/scss/reset.scss';
  @import './assets/scss/config.scss';
  @import "assets/scss/button.scss";

</style>