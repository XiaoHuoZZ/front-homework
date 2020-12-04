<template>
    <div>
        <el-container direction='vertical'>
            <hd></hd>
            <el-container>
                <el-aside width="200px">

                    <el-menu default-active="2" class="el-menu-vertical-demo">
                        <el-menu-item-group>
                            <template slot="title">学生功能</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    import header from './Header'
    export default {
        //注册顶部栏组件
        components: {
            'hd': header
        }

    }
</script>


<style lang="less" scoped>
</style>