<template lang="html">
    <div class="handle-box">
        <div class="notive_head titlt_line">
            <span class="tabhover ">通知中心</span>
        </div>
        <div class="">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        一体化智能截污井的工作展开<i class="header-icon el-icon-info"></i>
                    </template>
                    <div>视频功能的完成及维护</div>
                    <div>小程序界面的优化及功能增加</div>
                </el-collapse-item>
                <el-collapse-item title="放假通知" name="2">
                    <div>元旦放假日期通告</div>
                    <div>本次放假时间从~~到~~~</div>
                </el-collapse-item>
                <el-collapse-item title="任务通知" name="3">
                    <div>任务1</div>
                    <div>任务2</div>
                    <div>任务3</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        components: {},
        data () {
            return {
                activeNames: ['1']
            };
        },
        methods: {
            handleChange (val) {
                console.log(val);
            }
        }
    };
</script>
<style>
  .notive_head{margin-bottom: 18px}
  .active{
    color: black;
    font-size: 16px;
  }
  .msgselect span{display: inline-block}
  .el-dialog__header{background: white}
  .el-dialog__title{color: black!important;}
  .el-dialog__body{margin-top: 10px}
  .dialog-footer span{font-size: 12px}
</style>
