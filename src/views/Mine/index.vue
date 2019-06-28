<template>
  <div id="main">
    <Header title="我的喵喵"></Header>
      <div id="container">
        <Login></Login>
      </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Login from '@/components/Login'

export default {
  name:'Mine',
  data(){
    return{}
  },
  components:{
    Header,
    TabBar,
    Login
  }
}
</script>

<style scoped> 

</style>
