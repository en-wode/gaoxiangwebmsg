<template>
    <div class="login-wrap">
        <div class="ms-login">
            <!--<div class="ms-title">欢迎登陆</div>-->
            <img src="../../assets/img/logintitle.png" alt="" class="logintitle">
            <div class="login-form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="username">
                            <i slot="prefix" class="el-input__icon icon-ren iconfont"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                            <i slot="prefix" class="el-input__icon icon-unie65b iconfont"></i>
                        </el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')" :loading="ruleForm.isLoginLoading">{{loginText}}</el-button>
                    </div>
                    <!--<p style="font-size:12px;line-height:30px;color:#999;">{{tips}}</p>-->
                </el-form>
                <div class="forget-password tabhover">忘记密码</div>
                <!--<div class="login_line">第三方登录</div>-->
                <!--<el-row :gutter="20">-->
                    <!--<el-col :span="8"><div class="login-qq"></div></el-col>-->
                    <!--<el-col :span="8"><div class="login-weixin"></div></el-col>-->
                    <!--<el-col :span="8"><div class="login-weibo"></div></el-col>-->
                <!--</el-row>-->
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

import * as util from '../../assets/js/util.js';
import { requestLogin } from '../../api/api';

export default {
    data: function () {
        return {
            ruleForm: {
                username: '',
                password: '',
                isLoginLoading: false
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },
            error: '用户名密码错误'
        };
    },
    computed: {
        loginText () {
            if (this.ruleForm.isLoginLoading) return '登录中...';
            return '登录';
        }
    },
    methods: {
        submitForm (formName) {
            const self = this;
            self.ruleForm.isLoginLoading = true;
            // self.isBtnLoading = false;
            self.$refs[formName].validate((valid) => {
                if (valid) {
                    let loginParams = {name: self.ruleForm.username, password: self.ruleForm.password};
                    console.log(loginParams, 'loginParams');
                    requestLogin(loginParams).then(res => {
                        console.log(res);
                        self.ruleForm.isLoginLoading = false;
                        if (res.code === 0) {
                            this.$message({
                                message: res.msg,
                                type: 'error'
                            });
                        } else if (res.code === 1) {
                            util.session('user', JSON.stringify(res));
                            this.$message({
                                message: res.msg,
                                type: 'success'
                            });
                            this.$router.push({ path: '/index/home' });
                        }
                    });
                } else {
                    self.ruleForm.isLoginLoading = false;
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
    .logintitle{
        width: 500px;
        height: 64px;
    }
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url("../../assets/img/BG-loginmid.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
    .ms-title{
        font-size: 26px;
        text-align: center;
        margin: 75px auto 12px auto;
        border-bottom: 4px solid rgb(51, 167, 240);
        padding-bottom: 8px;
        width: 120px;
    }
    .ms-login{
        position: absolute;
        left: 50%;
        top: 42%;
        width:500px;
        height:340px;
        margin:-150px 0 0 -250px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 1px 8px 18px #4a4848;
    }
    .login-form{
        width: 60%;
        margin: 20px auto 0 auto;
    }
    .login-form .forget-password{
        text-align: center;
        height: 14px;
        font-size: 14px;
        color: #33a7f0;
        margin-top: 20px;
    }
    hr{
      margin: 40px 0;
    }
    .login-form .login_line{
        margin: 60px 0;
        line-height: 1px;
        border-left: 88px solid #ddd;
        border-right: 88px solid #ddd;
        text-align: center;
        font-size: 12px;
        color: #cccccc;
    }
    .login-form .el-row, .login-form .el-col{
        height: 26px;
    }
    .login-form .login-qq{
      height: 26px;
      background-image: url("../../assets/img/qq.png");
      background-repeat: no-repeat;
      width: 32px;
      margin: 0 auto;
    }
    .login-form .login-weixin{
      height: 26px;
      background-image: url("../../assets/img/weixin.png");
      background-repeat: no-repeat;
      width: 32px;
      margin: 0 auto;
    }
    .login-form .login-weibo{
      height: 26px;
      background-image: url("../../assets/img/weibo.png");
      background-repeat: no-repeat;
      width: 32px;
      margin: 0 auto;
    }
    .login-btn{
        margin-top: 40px;
        text-align: center;
        border-radius: 4px;
        box-shadow: 0 2px 10px #afaaaa;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
    .ms-login >>> .el-input__inner{
      border-radius: 0px;
      border: none;
      border-bottom: 1px solid #33a7f0;
    }
</style>
