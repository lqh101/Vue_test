<template>
  <el-aside >
        <el-menu
       
        class="el-menu-vertical-demo"
        text-color="#000"
        active-text-color="#000"
        >
        <el-menu-item  :index="item.id+''" v-for="item in goodsList[0].items" :key="item.id" :class="item.order_qty>item.in_box_qty?'red':'green'">
          <template slot="title">
            <img src="../assets/images/goods.jpg" alt="">
            <span class="goodName">{{item.name}}</span>
            <span class="goodOrder">{{item.in_box_qty}}/{{item.order_qty}}</span>
          </template>
        </el-menu-item>
        
        </el-menu>

      </el-aside>
</template>

<script>
import goodsList from '../assets/data/pack.json'
export default {
    data() {
        return {
            goodsList : goodsList.orders,
           
        }
    },
    mounted(){
        console.log(this.goodsList);
    }
}
</script>

<style scoped>

.el-aside::-webkit-scrollbar {
     display: none;
}
.el-menu{
    width: 100%;
}
.el-menu-item{
    height: 60px;
}
.el-menu-item img{
    width: 30px;
    height: 30px;
    margin-right: 20px;
}
.el-menu-item .goodName{
    height: 55px;
    line-height: 55px;
}
.el-menu-item .goodOrder{
    float: right;
    font-weight: bold;
}
.red{
    background-color: rgb(254, 237, 238);
}
.green{
    background-color: rgb(230, 248, 237);
}
</style>