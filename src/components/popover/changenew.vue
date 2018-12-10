<template lang="html">
    <el-dialog title="修改作品信息" :visible.sync="worktrans">
        <template :data="changework">
            <p> <span class="ft-gray">书号：<span class="ft-black">{{changework.bookauthor}}</span></span>   <span class="ft-gray">书名：<span class="ft-black">{{changework.bookname}}</span></span></p>
        </template>
        <div class="caozuoclass">
            <el-row type="flex" class="row-bg">
                <el-col :span="6" class="gezi">修改作品类型</el-col>
                <el-col :span="6" class="gezi">修改作品连载属性</el-col>
                <el-col :span="6" class="gezi">修改作者信息</el-col>
                <el-col :span="6" class="gezi">修改作品简介</el-col>
                <el-col :span="6" class="gezi">修改作者有话说</el-col>
                <el-col :span="6" class="gezi">修改推荐</el-col>
                <el-col :span="6" class="gezi">修改授权等级</el-col>
                <el-col :span="6" class="gezi">修改作品名称</el-col>
                <el-col :span="6" class="gezi">修改创建时间</el-col>
                <el-col :span="6" class="gezi">修改作者标签</el-col>
                <el-col :span="6" class="gezi">修改签约编辑</el-col>
                <el-col :span="6" class="gezi">修改封面图片</el-col>
            </el-row>
        </div>
    </el-dialog>
</template>



<script type="text/ecmascript-6">
    export default{
        props: ['changework', 'dialogworknew'],
        data () {
            return {
                worktrans: false
            };
        },
        watch: {
            dialogworknew (newVal) {
                this.worktrans = newVal;
                this.$emit('update:dialogworknew', newVal);
            },
            worktrans (newVal) {
                this.$emit('update:dialogworknew', newVal);
            }
        }
    };
</script>
<style >
  .caozuoclass{
    text-align: center;
    margin: 26px 0;
    border-top: 1px solid #666;
    border-left: 1px solid #666;
  }
  .el-row--flex{
    flex-flow: row wrap
  }
  .gezi{
    height: 56px;
    line-height: 56px;
    color: #666;
    border-right: 1px solid #666;
    border-bottom: 1px solid #666;
    cursor: pointer;
  }
  .gezi:hover{
    border: 1px solid #ef4b4b;
    color: #ef4b4b;
    background-color: #ffe5e5;
  }
</style>
