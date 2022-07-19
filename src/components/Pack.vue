<template>
  <div class="container">
    <div class="top">
      <h3>包裹装箱</h3>
      <el-dropdown split-button @command="statusChange">
        {{ dropList[status].label }}
        <template #dropdown>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in dropList" :key="index" :command="item.value">{{ item.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-input placeholder="请输入SKU" v-model="SKU" @blur="selectSKU"></el-input>
      <el-button>选择商品</el-button>
    </div>
    <div class="goodsInfo">
      <el-table :data="tableData" style="width: 100%" class="customer-table">
        <el-table-column label="" width="100">
          <img src="../assets/images/pic.jpg" alt="">
        </el-table-column>
        <el-table-column prop="name" label="商品" width="180">
        </el-table-column>
        <el-table-column prop="sku" label="">
        </el-table-column>
        <el-table-column prop="" label="箱号">
          #1
        </el-table-column>
        <el-table-column prop="" label="待装箱数量">
          0
        </el-table-column>
        <el-table-column prop="" label="本次装箱数量">
          0
        </el-table-column>
      </el-table>
    </div>
    <template>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="#1" name="first"></el-tab-pane>
        <el-tab-pane label="#2" name="second"></el-tab-pane>
        <el-tab-pane label="#3" name="third"></el-tab-pane>
        <el-tab-pane label="#4" name="fourth"></el-tab-pane>
      </el-tabs>
    </template>


    <div class="tabInfo">
      <el-table :data="this.goodsListInfo.items" style="width: 100%" class="customer-table" border
        :header-cell-style="{ background: '#fafafa', color: '#606266' }">
        <el-table-column label="商品图片" width="100">
          <img src="../assets/images/pic.jpg" alt="">
        </el-table-column>
        <el-table-column prop="name" label="商品" width="180">
        </el-table-column>
        <el-table-column prop="sku" label="">
        </el-table-column>
        <el-table-column prop="order_qty" label="下单数量">
        </el-table-column>
        <el-table-column prop="in_box_qty" label="装箱数量">

          <template v-slot:default="scope">
            <el-input  @blur="changeInputshow(scope.row)" placeholder="请输入数量" v-model="scope.row.in_box_qty" v-if="inputshow">
            </el-input>
            <!-- {{this.goodsListInfo.items}} -->
            <div  @click="changeInputshow(scope.row)" v-if="!inputshow">{{ scope.row.in_box_qty }}</div>
          </template>
        </el-table-column>
        <el-table-column label="装箱状态">
          <template v-slot:default="scope">
            <div>{{ scope.row.in_box_qty >= scope.row.order_qty ? '装箱完成' : '装箱中' }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作">

          <template v-slot:default="scope">
            <a @click="deletegood(scope.row.sku)">删除</a>
          </template>
        </el-table-column>
      </el-table>
    </div>


  </div>
</template>

<script>
export default {
  props: ["goodsList"],
  data() {
    return {
      status: '0',
      dropList: [
        { value: '0', label: '#1' },
        { value: '1', label: '#2' },
        { value: '2', label: '#3' },
      ],
      SKU: '',
      goodsListInfo: this.goodsList,
      tableData: [],
      inputshow: false,
      packtotal: '',
      activeName: 'first'
    }
  },
  mounted() {
    
  },
  methods: {
    //控制下拉菜单
    statusChange(val) {
      console.log('drop statusChange', val)
      this.status = val
    },
    //查找输入框输入的sku对应的商品
    selectSKU() {
      this.tableData = this.goodsListInfo.items.filter((todo) => {
        return todo.sku == this.SKU
      })
      if(this.tableData.length<=0){
        this.$message.error('未查询到结果，请输正确的SKU码')
      }else{
        this.$message.success('查询成功')
      }
    },
    //修改装箱数量
    changeInputshow(row) {
      
      this.inputshow = !this.inputshow
      if(row.order_qty>=row.in_box_qty){
        return
      }else{
        row.in_box_qty=0
        this.$message.error('请输入正确的数字')
      }
      
    },
    //删除商品
    deletegood(sku) {
      this.goodsListInfo.items = this.goodsListInfo.items.filter((todo) => {
        return todo.sku !== sku
      })
    },
    handleClick(tab, event) {
        
    }
  }
}
</script>

<style scoped>
.container {
  background-color: white;
  padding: 30px 30px;
  margin: 10px 10px;

}

.container .top h3 {
  margin: 0;
  flex: 1;
}

.top {
  display: flex;
}

.el-input {
  width: 200px;
  margin: 0 10px;
}

.goodsInfo {
  border: 1px solid rgb(209, 209, 209);
  margin-top: 10px;
  border-radius: 10px;
}

.el-table {
  text-align: center;
}

.el-tabs {
  margin-top: 60px;
  margin-bottom: 0!important;
}
.el-tab-pane{
  padding: 0 40px!important;
}
.tabInfo{
  margin-top: -26px;
}

a {
  color: rgb(80, 156, 255);
  cursor: pointer;
}

.tabInfo .el-table .el-input {
  width: 90% !important;

}
</style>