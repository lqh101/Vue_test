<template>
    <div class="container">
        <h3>包裹装箱</h3>
        <div class="content">
            <div class="left">
                1
            </div>
            <div class="right">
                <el-col :span="4" class="col">
                    <div class="sub-title"><span class="red">*</span>箱体重量</div>
                    <el-input placeholder="长" v-model="goodsForm.boxweight">
                            <template slot="append">CM</template>
                    </el-input>
                    
                </el-col>
                <el-col :span="4" class="col">
                    <div class="sub-title">长</div>
                    <el-input placeholder="长" v-model="goodsForm.chang" @blur="change">
                            <template slot="append">CM</template>
                        </el-input>
                </el-col>
                <el-col :span="4" class="col">
                    <div class="sub-title">宽</div>
                    <el-input placeholder="长" v-model="goodsForm.width" @blur="change">
                            <template slot="append">CM</template>
                        </el-input>
                </el-col>
                <el-col :span="4" class="col">
                    <div class="sub-title">高</div>
                    <el-input placeholder="长" v-model="goodsForm.height" @blur="change">
                            <template slot="append">CM</template>
                        </el-input>
                </el-col>
                <el-col :span="4" class="col">
                    <div class="sub-title">体积重量</div>
                    <div class="weightfont">{{goodsForm.height*goodsForm.width*goodsForm.chang/6000}}</div>
                </el-col>
                <el-col :span="4" class="col">
                    <div class="sub-title">计费重量</div>
                    <div class="weightfont">{{goodsForm.height*goodsForm.width*goodsForm.chang/6000>goodsForm.boxweight?goodsForm.height*goodsForm.width*goodsForm.chang/6000:goodsForm.boxweight}}</div>
                </el-col>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsList: [1],
            goodsForm: {
                boxweight:'1',
                chang: '2',
                width:'3',
                height:'4'
            }
        }
    },
    methods: {
        addRedStar(h, { column }) {
            return [
                h("span", { style: "color: red" }, "*"),
                h("span", " " + column.label),
            ];
        },
        change(){
            this.goodsForm = this.goodsForm
        }

    },
    mounted() {
        // this.chartPort(); 非主流
    }
}
</script>

<style scoped>
.container {
    background-color: white;
    padding: 30px 30px;
    margin: 10px 10px;

}

.container h3 {
    margin: 0;

}

.container .content {
    display: flex;
    width: 100%;
    border: 1px solid rgb(209, 209, 209);
    border-radius: 10px;
    overflow: hidden;
}

.container .content .left {
    width: 100px;
    height: 130px;
    background-color: rgb(245, 245, 245);
    font-size: 36px;
    line-height: 130px;
    text-align: center;
    color: rgb(51, 51, 51);
}

.container .content .right {
    flex: 1;
    display: flex;
    align-items: center;
}

.container .content .right .el-input {
    width: 80%;
}

.container .content .right .bigfont {
    font-size: 25px;
    color: #000;
    font-weight: bold;
}
.red{
    color: red;
}
.col{
    margin-left: 20px;
}
.col .sub-title{
    margin-bottom: 30px;
}
.col .el-input{
    width: 100%!important;
}
.col .el-input template{
    width: 30px;
}
.col .weightfont{
    height: 40px;
    line-height: 40px;
    font-size: 26px;
    font-weight: bold;
}
</style>