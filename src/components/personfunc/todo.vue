<template lang="html">
    <div class="handle-box">
        <div class="msgselect">
            <span class="tabhover active">待办事项</span>
        </div>
        <div v-if="msgshow">
            <div class="pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[50, 100, 150, 200]"
                        :page-size="100"
                        layout="slot, prev, pager, next, jumper"
                        :total="400">
                    <span class="fl ft-red">您有3条未读消息</span>
                </el-pagination>
            </div>
            <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe  fullscreen="true" @row-click="rowClick" row-key="id">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column  label="发送人" prop="bookauthor"  width="120" >
                </el-table-column>
                <el-table-column  label="内容" prop="bookname" >
                </el-table-column>
                <el-table-column  label="时间" prop="booktime">
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <ul>
                                <el-row :gutter="20">
                                    <el-col :span="6">置顶</el-col>
                                    <el-col :span="6">已读</el-col>
                                    <el-col :span="6">未读</el-col>
                                    <el-col :span="6">删除</el-col>
                                </el-row>
                            </ul>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div v-else>
            <div class="pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[50, 100, 150, 200]"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </div>
            <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe  fullscreen="true" @row-click="rowClick" row-key="id">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column  label="发送人" prop="bookauthor"  width="120" >
                </el-table-column>
                <el-table-column  label="内容" prop="bookname" >
                </el-table-column>
                <el-table-column  label="时间" prop="booktime" @row-click="openDetails(row, event, column)">
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <ul>
                                <el-row :gutter="20">
                                    <el-col :span="6">置顶</el-col>
                                    <el-col :span="6">已读</el-col>
                                    <el-col :span="6">未读</el-col>
                                    <el-col :span="6">删除</el-col>
                                </el-row>
                            </ul>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog title="发送人：8888" :visible.sync="msgdialog">
            <el-input
                    type="textarea"
                    :rows="16"
                    placeholder="请输入内容"
                    v-model="textarea">
            </el-input>
            <div slot="footer" class="dialog-footer">
                <span class="fl"><span class="ft-gray">日期：</span>2018-5-10  12:21:22</span>
                <span class="fl ft-gray mgl20">附件</span>
                <el-button type="primary" @click="dialogFormVisible = false">回复</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        components: {},
        data () {
            return {
                msgshow: true,
                msgdialog: false,
                cur_page: '',
                multipleSelection: '',
                currentPage4: 1,
                book: [{
                    id: '1',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒'
                }, {
                    id: '2',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒'
                }, {
                    id: '3',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒'
                }, {
                    id: '4',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒'
                }]
            };
        },
        methods: {
            handleSelectionChange (val) {
                this.multipleSelection = val;
            },
            handleCurrentChange (val) {
                this.cur_page = val;
            },
            handleSizeChange (val) {
                console.log(`每页 ${val} 条`);
            },
            rowClick (row) {
                this.msgdialog = true;
                console.log(row);
            }
        }
    };
</script>
<style>
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
