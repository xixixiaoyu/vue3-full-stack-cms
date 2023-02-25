<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="title">云牧</div>
        <el-form-item prop="userName">
          <el-input type="text" prefix-icon="user" v-model="user.userName" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" prefix-icon="view" v-model="user.userPwd" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login(userForm)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const { proxy } = getCurrentInstance();

const user = ref({
  userName: "",
  userPwd: "",
});
const rules = {
  userName: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  userPwd: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
};

const userForm = ref(null);

const login = async formEl => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      proxy.$api.login(user.value).then(res => {
        store.commit("saveUserInfo", res);
        router.push("/welcome");
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f9fcff;
  .modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px #c7c9cb4d;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>
