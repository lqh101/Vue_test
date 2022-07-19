<template>
    <div class="container">
        <div class="top">
        <h3>物流信息</h3>
        <el-button type="primary" plain>多箱多个物流单号</el-button>
        <el-button type="primary" plain>多箱一个物流单号</el-button>
    </div>
        <div class="content">
            <div class="left">
                1
            </div>
            <div class="right">
                <el-col :span="4" class="col">
                    <div class="sub-title"><span class="red">*</span>物流公司</div>
                    <el-dropdown split-button @command="statusChange">
                        {{ dropList[status].label }}
                        <template #dropdown>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item, index) in dropList" :key="index" :command="item.value">{{
                                        item.label
                                }}</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-col>
                <el-col :span="12" class="col">
                    <div class="sub-title"><span class="red">*</span>物流单号</div>
                    <el-input placeholder="请输入内容" v-model="goodsForm.order">

                    </el-input>
                </el-col>

            </div>
        </div>
        <div class="content">
            <div class="left">
                2
            </div>
            <div class="right">
                <el-col :span="4" class="col">
                    <div class="sub-title"><span class="red">*</span>物流公司</div>
                    <el-dropdown split-button @command="statusChange">
                        {{ dropList[status].label }}
                        <template #dropdown>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item, index) in dropList" :key="index" :command="item.value">{{
                                        item.label
                                }}</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-col>
                <el-col :span="12" class="col">
                    <div class="sub-title"><span class="red">*</span>物流单号</div>
                    <el-input placeholder="请输入内容" v-model="goodsForm.order">

                    </el-input>
                </el-col>

            </div>
        </div>
        <div class="content">
            <div class="left">
                3
            </div>
            <div class="right">
                <el-col :span="4" class="col">
                    <div class="sub-title"><span class="red">*</span>物流公司</div>
                    <el-dropdown split-button @command="statusChange">
                        {{ dropList[status].label }}
                        <template #dropdown>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(item, index) in dropList" :key="index" :command="item.value">{{
                                        item.label
                                }}</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-col>
                <el-col :span="12" class="col">
                    <div class="sub-title"><span class="red">*</span>物流单号</div>
                    <el-input placeholder="请输入内容" v-model="goodsForm.order">

                    </el-input>
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
            status: '0',
            dropList: [
                { value: '0', label: '#1' },
                { value: '1', label: '#2' },
                { value: '2', label: '#3' },
            ],
            goodsForm: {
                order: '',
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
        statusChange(val) {
            this.status = val
            console.log(this.status);
        },
    }
}
</script>

<style scoped>
.container {
    background-color: white;
    padding: 30px 30px;
    margin: 10px 10px;

}
.top{
    display: flex;
}
.container .top h3{
    margin: 0;
    flex: 1;
}
.red{
    color: red;
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

.drop {
    width: 300px;
}

.col {
    margin-left: 20px;
}

.col .sub-title {
    margin-bottom: 30px;
}

.col .el-input {
    width: 100% !important;
}

.col .el-input template {
    width: 30px;
}

.col .weightfont {
    height: 40px;
    line-height: 40px;
    font-size: 26px;
    font-weight: bold;
}
.el-button{

}
</style>