<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">插槽使用</div></nav-bar>
    <!-- <h2>首页</h2> -->
  </div>
</template>

<script>
import NavBar from 'components/narbar/NavBar'
import {getHomeMultiData} from 'network/home'

export default {
  name:'Home',
  components:{
    NavBar
  },
  data(){
    return{
      banners:[],
      recommends:[],
      keywords:[],
      dkeyword:[]
    }
  },
  created(){
    // 1.请求多个数据，数据在组件创建时就需要获取到
    // 通过.then()方法获取,异步操作
    getHomeMultiData().then(res=>{
      this.banners = res.data.banner;
      this.recommends = res.data.recommend;
      console.log(res);
      //执行完后所有的变量会被释放，因此获取后需将数组保存至data中
    },err=>{
      console.log(err);
    })
    // 此处直接打印不会返回结果，因为获取数据的函数是异步函数，执行打印语句时函数可能还未执行完
    // console.log(this.result);
  },
  method:{

  }
}
</script>

<style>
.home-nav{
  background-color:#ff8198;
  color: #eee;
}
</style>