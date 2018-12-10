<template lang="html">
    <div>
        <div class="handle-box">
            <div class="handle-left">
                <h3>透视小农民 <span>（如有和作品正文无关的说明，请假，上架感言，番外等内容请发作品相关卷内）</span></h3>
                <h4>简介：<span>小农民获得透视功能，从此青云直上，各色美女主动投怀送抱。当清纯村花、火爆女警、冷艳总裁、可爱萌萌哒的校花纷沓而来时，赵小凤觉得透视功能也顶不住啊。</span></h4>
            </div>
            <div class="handle-left">
                <el-button type="primary" icon="search" >增加新卷</el-button>
                <el-button type="primary" icon="search" >章节排序</el-button>
                <el-button type="primary" icon="search" >本书草稿箱</el-button>
                <el-button type="primary" icon="search" >新增作品相关卷</el-button>
            </div>
        </div>
        <div class="handle-box">
            <span class="handle-title">作品相关</span>
            <span>增加章节</span>
            <span>本卷增加定时发布章节</span>
            <span>本卷增加草稿</span>
            <span class="fr">批量删除所选章节</span>
            <span class="fr">隐藏所有已删章节</span>
        </div>
        <!--tab表格-->
        <div class="pagination">
            <span class="handle-title">正文</span>
            <span>增加章节</span>
            <span>本卷增加定时发布章节</span>
            <span>本卷增加草稿</span>
            <span>修改卷标题和卷简介</span>
            <span class="ft-gray">删除本卷</span>
            <span class="fr">批量删除所选章节</span>
            <span class="fr">隐藏所有已删章节</span>
        </div>
        <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column  label="章节名" prop="bookid"  >
            </el-table-column>
            <el-table-column  label="更新时间"  prop="booksr">
            </el-table-column>
            <el-table-column  label="字数" width="100" prop="booknum" >
            </el-table-column>
            <el-table-column  label="公众或VIP" width="100" prop="booklz">
            </el-table-column>
            <el-table-column  label="订阅" width="100" prop="booklz">
            </el-table-column>
            <el-table-column label="操作" >
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="bottom">
                        <div slot="reference" class="name-wrapper">
                            <p class="ft-blue txct">选择操作</p>
                        </div>
                        <div class="caozuo">
                            <p class="caozuo" @click="handleClick(scope.row)">申章节</p>
                            <p class="caozuo" @click="subscripte(scope.row)">订阅记录</p>
                            <p class="caozuo">平均订阅统计</p>
                            <p class="caozuo">统计</p>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
        </el-table>
        <!--tab表格end-->
    </div>
</template>

<style scoped>
  .handle-left{
    display: inline-block;
    width: 700px;
    vertical-align: 25px;
  }
  .handle-left > h3 {
    font-weight: 600;
    display: inline-block;
  }
  .handle-left > h3 > span {
    font-size: 14px;
    font-weight: 400;
    color: #747474;
    overflow: hidden;
    text-overflow : ellipsis;
    white-space: nowrap;
  }
  .el-button+.el-button{
    margin-left: 50px;
  }
  .handle-left > h4{
    font-weight: 600;
    display: inline-block;
    width: 570px;
    margin-top: 8px;
  }
  .handle-left > h4 > span {
    font-size: 14px;
    font-weight: 400;
  }
  .el-button--primary{
    background-color: #313131;
    border-color: #313131;
  }
  .handle-box > span,.pagination > span{
    margin-right: 26px;
    font-size: 14px;
    color: #0f0808;
  }
  .handle-box > .handle-title,.pagination > .handle-title{
    font-weight: 700;
    font-size: 16px;
  }
  .pagination{
    text-align: left;
  }
</style>

<script type="text/ecmascript-6">
    export default{
        components: {},
        data () {
            return {};
        }
    };
</script>
