<template>

   
        <el-header>
        <div><span>实习管理系统</span></div>
        <el-button type="info" @click="logout">登出</el-button>
    </el-header>
   



</template>

<script>
    export default {
        name:"mHeader",
        methods: {
            logout() {
                //登出逻辑

            }
        }
    }
</script>


<style lang="less" scoped>
    .el-header {
        display: flex;
        justify-content: space-between; //两边贴边保存
        background-color: rgb(14, 99, 116);
        align-items: center; //上下居中
        color: white;
        font-size: 20px;
    }
</style>