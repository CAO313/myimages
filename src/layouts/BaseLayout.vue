<template>
  <div id="baseLayout">
    <a-layout class="layout" style="min-height:100vh">
      <a-layout-header class="header">
        <a-row type="flex">
          <a-col flex="180px" class="margin">
            <router-link to="/">
              <div class="logo">
                <img :src="logo" alt="MyImages - 表情包专业户"/>
                <span class="title">MyImages</span>
              </div>
            </router-link>
          </a-col>
          <a-col flex="auto">
            <a-menu
                theme="dark"
                mode="horizontal"
                :selectedKeys="['/home']"
                :style="{ lineHeight: '64px' }"
            >
              <a-menu-item key="/home">
                <router-link to="/">首页</router-link>
              </a-menu-item>
              <a-menu-item key="/my">
                <!--                  <router-link to="/admin">CAO</router-link>-->
                <router-link to="/my">CAO的推荐</router-link>
              </a-menu-item>
              <a-menu-item key="/cao" @click="userCheck">
<!--                  <router-link to="/admin">CAO</router-link>-->
                我是管理员
              </a-menu-item>
            </a-menu>
          </a-col>
          <a-col>
            <a-button type="primary" @click="doShowCreateModal">
              <template #icon>
                <CloudUploadOutlined/>
              </template>
              上传表情
            </a-button>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content style="padding: 16px 50px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Father ©2021 Created by CAO
      </a-layout-footer>
    </a-layout>
    <create-emoji-modal :visible="showCreateModal" :onClose="doCloseCreateModal"/>
  </div>
</template>

<script>
import {LOGO} from '../constant/index'
import {CloudUploadOutlined} from '@ant-design/icons-vue';
import CreateEmojiModal from "@/components/CreateEmojiModal";
import {check} from "@/services/emoji";

export default {

  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  name: 'BaseLayout',
  components: {
    CloudUploadOutlined,
    CreateEmojiModal,
  },
  data() {
    return {
      logo: LOGO,
      showCreateModal: false,
    }
  },
  methods: {
   async userCheck(){
     const res = await check({

     });
     if(res=='400'){
       this.$router.push({ path: `/login`});
       //登录页面
     }else if(res=='200'){
       this.$router.push({ path: `/admin`});
     }
    },
    doShowCreateModal() {
      this.showCreateModal = true;
    },
    doCloseCreateModal() {
      this.showCreateModal = false;
    },
  }
}
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  height: 64px;
}

.logo > img {
  margin-right: 16px;
  height: 80%;
}

.title {
  font-size: 18px;
  color: #fff;
  margin-right: 16px;
  letter-spacing: 4px;
}
</style>