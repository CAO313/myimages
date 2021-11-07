<template>
  <a-form layout="inline"  @submit="handleSubmit" >
    <a-form-item >
      <a-input
          v-model:value="user.username"
          placeholder="Username"
      >
        <br>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
          v-model:value="user.password"
          type="password"
          placeholder="Password"
      >
      </a-input>
      <br>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
  <p>联系799118072@qq.com申请管理员</p>
</template>


<script>
import {doLogin} from "@/services/emoji.js"
export default {
  data(){
    return{
      user:{},
    }
  },
  methods: {
    // Only show error after a field is touched.
    async handleSubmit() {
      const res = await doLogin(this.user);
      if(res=='200'){
        this.$router.push({ path: `/admin`});
      }else {
        alert('发生了意料之外的错误!')
      }

      }
  },
};
</script>