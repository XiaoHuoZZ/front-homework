<template>

    <el-container direction='vertical' class="container">
        <hd></hd>
        <el-container>
            <as ref="mAside"></as>
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
            'as': aside,
            'mn': main
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