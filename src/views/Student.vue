<template>
    
        <el-container direction='vertical' class="container">
            <hd></hd>
            <el-container>
                <as></as>
               <mn></mn>
            </el-container>
        </el-container>

    
</template>

<script>
    import header from '../components/Header'
    import aside from '../components/Aside'
    import main from '../components/Main'
    export default {
        //注册组件
        components: {
            'hd': header,
            'as':aside,
            'mn':main
        }

    }
</script>


<style lang="less" scoped>

.container {
    height: 100%;
}
</style>