<template>

    <el-container direction='vertical' class="container">
        <hd></hd>
        <el-container>
            <as ref="mAside"  @emit-select="handle_select" :menuList="items" :title="title"></as>
            <el-main>Main</el-main>
        </el-container>
    </el-container>


</template>

<script>
    import header from '../components/common/Header'
    import aside from '../components/common/Aside'
    export default {
        data() {
            return {
                items: [{text: '我的',},{text: '实习列表'}],
                title:'学生功能',
            }
        },
        //注册组件
        components: {
            'hd': header,
            'as': aside,
        },
        methods: {
            //处理点击事件
            handle_select(index) {
                console.log(index)
            }
        }

    }
</script>


<style lang="less" scoped>
    .container {
        height: 100%;
    }
</style>