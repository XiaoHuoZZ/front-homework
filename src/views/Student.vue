<template>

    <el-container direction='vertical' class="container">
        <hd></hd>
        <el-container>
            <as ref="mAside"></as>
            <el-main>Main</el-main>
        </el-container>
    </el-container>


</template>

<script>
    import header from '../components/common/Header'
    import aside from '../components/common/Aside'
    export default {
        //注册组件
        components: {
            'hd': header,
            'as': aside,
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                //改变aside组件里的值

                this.$refs.mAside.title = "学生功能"
                this.$refs.mAside.menuList = [{
                        text: '我的',
                    },
                    {
                        text: '实习列表'
                    }
                ]
            }
        }

    }
</script>


<style lang="less" scoped>
    .container {
        height: 100%;
    }
</style>