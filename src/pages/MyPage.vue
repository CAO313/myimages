<template>
      <h2 align="center">today's music time</h2>
  <div style="text-align: center">
      <video  src="url" align="center" controls="controls" width="1500" height="600" poster="http://101.34.14.236:313/15b399a3-91c8-4797-85c7-2fd998ed47f3.gif" loop=""  preload="none">
        你的浏览器暂不支持HTML5的vedio元素
      </video>
     <h1 v-text="name"></h1>
  </div>
  <br>
  <div style="text-align: center">
    <h1>壁纸推荐</h1>
<!--    <a download="今日壁纸" :href="codeImg">点击查看</a>-->
    <br>
    <img :src="codeImg" alt="壁纸" width="1500" height="800">
    <br>

  </div>
</template>
<script>
import {searchMusic} from "@/services/emoji"

export default {
    data(){
      return{
        name:'',
        url:'',
        codeImg:'http://101.34.14.236:313/1bac21dd-6827-4635-a5ff-35514813a0ae.jpg'
      }
    },
    created(){
      this.init();
    }
,
    methods:{
      async init(){
        const res = await searchMusic();
        if(res){
          this.name = res.name;
          this.url = res.url;
          let player = document.querySelector('video')
          player.src = res.url
          player.play()
          this.codeImg = res.img
        }
      }
    }
  }
</script>
