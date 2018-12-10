<template>
    <div class="header">
        <div class="logo"><img src="../../assets/img/Logo.png" alt="" ></div>
        <div class="user-info">
            <ul class="user-func">
                <li @click="headfunc('message')"><el-badge is-dot class="item tabhover" >消息</el-badge></li>
                <li @click="headfunc('notice')"><el-badge is-dot class="item tabhover">通知</el-badge></li>
                <li @click="headfunc('todo')"><el-badge class="item tabhover" >待办</el-badge></li>
                <li @click="headfunc('memo')"><el-badge is-dot class="item tabhover">备忘录</el-badge></li>
            </ul>
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                <img class="user-logo" src="../../../static/img/img.jpg">
                {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="selectroute">后台选择</el-dropdown-item>
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <vTabpane></vTabpane>
    </div>
</template>
<script>
import vTabpane from './Tabpane.vue';
export default {
    components: {
        vTabpane
    },
    data () {
        return {
            name: 'linxin'
        };
    },
    computed: {
        username () {
            let username = sessionStorage.ms_username;
            return username;
        }
    },
    methods: {
        handleCommand (command) {
            let vm = this;
            switch (command) {
            case 'loginout':
                localStorage.removeItem('ms_username');
                vm.$router.push('/');
                break;
            case 'selectroute':
                this.$store.commit('swfadmin', true);
                break;
            }
        },
        headfunc (val) {
            console.log(val);
            this.$router.push('/personfunc/' + val + '');
        }
    }
};
</script>
<style >
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 68px;
        font-size: 22px;
        line-height: 68px;
        color: #fff;
        background: #464343;
        box-shadow: 0 0 9px 6px #cad4dc;
    }
    .header .logo{
        float: left;
        width: 180px;
        text-align: center;
        line-height: 68px;
        background-color: white;
        padding-top: 10px;
        height: 58px;
    }
    .header .logo img{
      height: 38px;
      width: 154px;
    }
    .user-info {
        float: right;
        padding-right: 120px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: white;
        cursor: pointer;
        vertical-align: top;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:12px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .user-func{
      display: inline-block;
      margin-right: 14px;
    }
    .user-func li{
      display: inline-block;
      padding: 0 10px;
      border-right: 2px solid #ccc;
      height: 20px;
      line-height: 14px;
    }
    .user-func li:last-child{
      border-right: none;
    }
    .user-func .el-badge{
      height: 24px;
      line-height: 24px;
      font-size: 12px
    }
    .user-func .el-badge__content.is-dot{
      width: 5px;
      height: 5px;
    }
</style>
