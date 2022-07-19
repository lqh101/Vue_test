<template>
  <div>
      <Header></Header>
      <el-container class="content">
        <Goods></Goods>
        <el-main>
          <OrderInfo :goodsList = "goodsList.orders[0]"></OrderInfo>
          <Pack :goodsList = "goodsList.orders[0]"></Pack>
          <PackInfo></PackInfo>
          <LogisticsInfo></LogisticsInfo>
        </el-main>


        

      </el-container>
  </div>
</template>

<script>
  import Header from './header.vue'
  import Goods from './Goods.vue'
  import OrderInfo from './OrderInfo.vue'
  import Pack from './Pack.vue'
  import PackInfo from './PackInfo.vue'
  import LogisticsInfo from './LogisticsInfo.vue'
  import goodsList from '../assets/data/pack.json'
export default {
  components:{Header,Goods,OrderInfo,Pack,PackInfo,LogisticsInfo},
  data() {
    return {
      goodsList
    }
  },
}
</script>

<style>
.content{
  margin-top: 20px;
}
.el-aside .el-menu{
    border-right: none;
    box-sizing: border-box;
}
.el-main{
    padding: 0!important;
}
</style>