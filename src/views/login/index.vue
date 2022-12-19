<template>
  <div class="login">
    <div class="login-view">
      <div class="login-model">
        <div class="login-text">系统登录</div>
        <div class="login-form">
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-row>
              <el-col :span="2"></el-col>
              <el-col :span="20"
                ><el-form-item prop="userCode">
                  <el-input
                    type="text"
                    v-model="loginForm.userCode"
                    placeholder="请输入工号"
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="2"></el-col>
            </el-row>

            <el-row v-if="userNameVisable">
              <el-col :span="2"></el-col>
              <el-col :span="20">
                <el-form-item prop="userName">
                  <el-input
                    type="text"
                    v-model="loginForm.userName"
                    placeholder="输入工号后回车获取用户名"
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="2"></el-col>
            </el-row>

            <el-row>
              <el-col :span="2"></el-col>
              <el-col :span="20">
                <el-form-item prop="userPassword">
                  <el-input
                    type="password"
                    v-model="loginForm.userPassword"
                    placeholder="请输入密码"
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="2"></el-col>
            </el-row>

            <el-row>
              <el-col :span="2"></el-col>
              <el-col :span="20">
                <el-form-item prop="hopital">
                  <el-select
                    v-model="loginForm.hopital"
                    placeholder="请选择院区"
                    class="block"
                  >
                    <el-option
                      v-for="item in hospitalInfo"
                      :key="item.fixmedins_code"
                      :label="item.fixmedins_name"
                      :value="item.fixmedins_code"
                    ></el-option>
                  </el-select> </el-form-item
              ></el-col>
              <el-col :span="2"></el-col>
            </el-row>

            <el-row>
              <el-col :span="2"></el-col>
              <el-col :span="20">
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="resetForm('loginForm')"
                    class="block btn-block"
                    >登录</el-button
                  >
                </el-form-item></el-col
              >
              <el-col :span="2"></el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
    <div class="login-bottom">
      <span>版权：济南翌康科技有限公司</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        userCode: "",
        userName: "",
        userPassword: "",
        hospital: "",
      },
      userNameVisable: false,
      hospitalInfo: [
        { fixmedins_code: "H37132100308", fixmedins_name: "沂南县人民医院" },
        { fixmedins_code: "H37132100116", fixmedins_name: "沂南县中医医院" },
      ],
      rules: {
        userCode: [{ required: true, message: "请输入工号", trigger: "blur" }],
        userName: [
          {
            required: true,
            message: "输入工号后回车获取用户名",
            trigger: "blur",
          },
        ],
        userPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
        hospital: [
          { required: true, message: "请选择院区", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .el-input {
    width: 100%;
    // margin-left: 40px;
    margin-bottom: 10px;
    .el-input__inner {
      height: 50px;
    }
  }
}
.login {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0.875rem;
  overflow: hidden;
  background: url("@/assets/images/login-bg.jpg") 50%/100% 100% no-repeat;
  .login-view {
    width: 90%;
    height: 43.125rem;
    position: absolute;
    left: 5%;
    top: calc(50% - 345px);
    border-radius: 15px;
    //阴影
    // -webkit-box-shadow: 0 5px 10px 10px rgb(0 0 0 / 10%);
    box-shadow: 0 5px 10px 10px rgb(0 0 0 / 10%);
    //background:url() background-position background-size background-repeat
    background: url("@/assets/images/login-left-bg.png") 13%/585px 376px
      no-repeat;
    .login-model {
      width: 480px;
      // height: calc(100% - 40px);
      height: 100%;
      background-color: #fff;
      float: right;
      border-radius: 15px;
      // padding: 20px;
      .login-text {
        width: 100%;
        height: 110px;
        line-height: 110px;
        text-align: center;
        color: #000;
        font-size: 22px;
        font-weight: 700;
        padding-top: 65px;
      }
      .login-form {
        padding: 20px;
        .block {
          display: block;
          width: 100%;
          height: 50px;
        }
        .btn-block {
          margin-top: 19px;
        }
      }
    }
  }
  .login-bottom {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #bbb;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    text-align: center;
    padding-right: 20px;
  }
}
</style>