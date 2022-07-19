<template>
  <div>
    <h3>订单信息</h3>
    <p class="info"><span>仓库：{{goodsList.order_no}}</span><span>商品数量：{{goodsList.product_qty}}</span><span>目的地：{{goodsList.destination}}</span></p>
    <p><span>所属客户：{{goodsList.user}}</span></p>
    <p><span>备注：{{goodsList.remark}}</span></p>
  </div>
</template>

<script>
export default {
    props:["goodsList"]
}
</script>

<style scoped>
div{
    background-color: white;
    padding: 30px 30px;
    margin: 0 10px;
}
div h3{
    margin: 0;
}
p{
    width: 70%;
    margin-left: 10px;
}
.info{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>