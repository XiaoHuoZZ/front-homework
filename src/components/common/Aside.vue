<template>
  <el-aside width="200px">

    <el-menu default-active="2" class="el-menu-vertical" @select="handleSelect">
      <el-menu-item-group>
        <div class="functionName">{{ title }}</div>
        <el-menu-item :index=item.text v-for="item in menuList" :key="item.text">{{item.text}}</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: 'mAside',
    props: {
      //1.类型限制：type
      //2.提供一些默认值，必传值
      menuList: {
        type: Array,
        default: [{text:'item1'},{text:'item2'}], //如果是一个对象则default必须是一个函数返回
        required: false
      },

      title:{
        type: String,
        default: 'funcationName',
        required:true
      }
    },
    methods: {
      //侧边栏点击触发，可得到点击的item的index,indexPath
      handleSelect(index, indexPath) {
        // console.log(index)
        //向父组件发送信息
        this.$emit('emit-select', index)
      }
    }

  }
</script>


<style lang="less" scoped>
  .functionName {
    font-weight: bold;
  }
</style>