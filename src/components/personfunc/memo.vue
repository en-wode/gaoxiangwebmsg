<template lang="html">
    <div class="handle-box">
        <div class="notive_head titlt_line" >
            <span class="tabhover ">备忘录</span>
        </div>
        <div class="">
            <div class="pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[50, 100, 150, 200]"
                        :page-size="100"
                        layout="slot, prev, pager, next, jumper"
                        :total="400">
                    <span class="fl ft-red">添加事项</span>
                </el-pagination>
            </div>
            <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe  fullscreen="true" @row-click="rowClick" row-key="id">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column  label="内容" prop="bookname" >
                </el-table-column>
                <el-table-column  label="进度" width="220" >
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <el-progress :percentage="scope.row.progress" :status="scope.row.state"></el-progress>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column  label="时间" prop="booktime">
                </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <div slot="reference" class="name-wrapper">
                            <ul>
                                <el-row :gutter="20">
                                    <el-col :span="6">完成</el-col>
                                    <el-col :span="6">修改</el-col>
                                    <el-col :span="6">置顶</el-col>
                                    <el-col :span="6">删除</el-col>
                                </el-row>
                            </ul>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog title="标题：8888" :visible.sync="msgdialog">
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
                msgselect: true,
                msgshow: true,
                msgdialog: false,
                cur_page: '',
                multipleSelection: '',
                currentPage4: 1,
                book: [{
                    id: '1',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    progress: 80
                }, {
                    id: '2',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    progress: 80,
                    state: 'exception'
                }, {
                    id: '3',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    progress: '100',
                    state: 'success'
                }, {
                    id: '4',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    progress: 0,
                    state: 'exception'
                }]
            };
        },
        methods: {
            msgchange (val) {
                this.msgselect = val;
                this.msgshow = val;
            },
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
                if (event.target.nodeName !== 'INPUT' && event.target.nodeName !== 'SPAN') {
                    this.msgdialog = true;
                    console.log(row);
                }
            }
        }
    };
</script>
<style>

</style>
