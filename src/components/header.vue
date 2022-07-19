<template>
  <div class="header">
    <!-- 头部搜索框 -->
    <el-row :gutter="20" class="search">
            <el-col :span="8">
                <el-input placeholder="请输入内容"  v-model="search">
                     
                </el-input>
            </el-col>
            <el-col :span="4">
                <el-button @click="selectGood">搜索</el-button>
            </el-col>
    </el-row>
    <!-- 头部订单展示区域 -->
    <el-row class="order">
        <h3>待拣货订单</h3>
        <el-button type="primary" plain>#c01019000038</el-button>
        <el-button>#c01019000038</el-button>
        <el-button>#c01019000038</el-button>
        <el-button type="success" plain>#c01019000038 <span class="success">✔</span></el-button>
        <el-button type="success" plain>#c01019000038 <span class="success">✔</span></el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            search:''
        }
    },
    methods:{
        selectGood(){
            if(this.search!='PK00001'){
                this.$message.error('信息不存在')
            }
        }
    }
}
</script>

<style scoped>
    .header{
        background-color: white;
    }
    .header .search{
        width: 100%;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgb(220, 222, 226);
        
    }
    .order .el-button{
        position: relative;
    }
    .success{
        display: block;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: rgb(67, 201, 86);
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 15px;
        color: rgb(255, 255, 255);
        line-height: 25px;
    }
    .header .search .el-col{
        padding: 0!important;
    }
    .header .search .el-col .el-button{
        background-color: rgb(58, 99, 245);
        color: white;
    }
    .order{
        padding: 0 20px;
        padding-bottom: 30px;
    }
    .order button{
        width: 200px;
        height: 45px;
    }

</style>