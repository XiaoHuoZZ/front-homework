<template>
    <el-aside width="200px">

        <el-menu default-active="2" class="el-menu-vertical">
            <el-menu-item-group>
                <div>{{ title }}</div>
                <el-menu-item :index=item.text v-for="item in menuList" :key="item.text">{{item.text}}</el-menu-item>
            </el-menu-item-group>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name:'mAside',
        data(){
          return {
            title:'functionName',
            menuList:[
              {
                text:'list1',
              },
              {
                text:'list2'
              }
            ]
          }
        },

    }
</script>


<style lang="less" scoped>

</style>