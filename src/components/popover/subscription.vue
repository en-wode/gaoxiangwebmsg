<template lang="html">
    <el-dialog title="订阅记录" :visible.sync="subtrans">
        <el-form :inline="true" :model="changework" class="demo-form-inline">
            <div>
                <el-form-item label="虚拟币类别">
                    <el-select v-model="virtual" placeholder="请选择">
                        <el-option
                                v-for="item in virtualoptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="域名">
                    <el-select v-model="realm" placeholder="请选择">
                        <el-option
                                v-for="item in realmoptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择时间">
                    <el-select v-model="time" placeholder="请选择">
                        <el-option
                                v-for="item in timeoptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <el-collapse accordion>
                <el-collapse-item>
                    <div>
                        <el-form-item label="起始">
                            <el-input v-model="book[0].booktime" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                        <el-form-item label="结束">
                            <el-input v-model="book[0].booktime" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="用户ID">
                            <el-input v-model="book[0].bookid" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                        <el-form-item label="用户名">
                            <el-input v-model="book[0].bookid" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="书名">
                            <el-input v-model="book[0].bookname" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                        <el-form-item label="章节ID">
                            <el-input v-model="book[0].bookbreak" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </div>
                    <div class="aling">
                        <el-button type="primary" icon="search" @click="search">提交</el-button>
                        <el-checkbox v-model="checked">计算销售额</el-checkbox>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <div class="pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[50, 100, 150, 200]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </div>
            <el-table :data="book" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange" stripe="true">
                <el-table-column  label="ID" prop="bookid" sortable width="80" fixed="left">
                </el-table-column>
                <el-table-column label="用户" width="100" prop="bookauthor">
                </el-table-column>
                <el-table-column label="时间" width="320" prop="booktime">
                </el-table-column>
                <el-table-column  label="书名" width="160"  prop="bookname">
                </el-table-column>
                <el-table-column  label="章节" width="210"  prop="bookid">
                </el-table-column>
                <el-table-column  label="价格" width="210"  prop="bookbreak">
                </el-table-column>
                <el-table-column  label="红包类别" width="100"  prop="bookclass">
                </el-table-column>
                <el-table-column  label="来自" width="100"  prop="bookid">
                </el-table-column>
            </el-table>
        </el-form>
    </el-dialog>
</template>

<script type="text/ecmascript-6">
    export default{
        props: ['changework', 'subscription'],
        data () {
            return {
                subtrans: false,
                virtualoptions: [{
                    value: '选项1',
                    label: '有乐豆'
                }, {
                    value: '选项2',
                    label: '有乐币'
                }],
                realm: '',
                virtual: '',
                time: '',
                checked: false,
                is_search: false,
                multipleSelection: [],
                cur_page: 1,
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                realmoptions: [{
                    value: '选项1',
                    label: '主站'
                }, {
                    value: '选项2',
                    label: '3G版'
                }, {
                    value: '选项3',
                    label: 'wap版'
                }, {
                    value: '选项4',
                    label: '触屏版'
                }, {
                    value: '选项5',
                    label: '安卓版'
                }, {
                    value: '选项5',
                    label: 'ios版'
                }, {
                    value: '选项5',
                    label: '全部手机'
                }],
                timeoptions: [{
                    value: '选项1',
                    label: '主站'
                }, {
                    value: '选项2',
                    label: '3G版'
                }, {
                    value: '选项3',
                    label: 'wap版'
                }, {
                    value: '选项4',
                    label: '触屏版'
                }, {
                    value: '选项5',
                    label: '安卓版'
                }, {
                    value: '选项5',
                    label: 'ios版'
                }, {
                    value: '选项5',
                    label: '全部手机'
                }],
                book: [{
                    bookid: '2016',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    bookbreak: 33,
                    bookremarks: '预计字数200',
                    booksr: '8/1/4.00',
                    bookxs: '上海市普陀区金沙江路 1518 弄',
                    bookclass: '男频都市',
                    booknum: '83.5万',
                    booklz: '连载'
                }, {
                    bookid: '123123',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    bookbreak: 25,
                    bookremarks: '预计字数200，存稿90',
                    booksr: '0/1/0.00',
                    bookxs: '上海市普陀区金沙江路 1518 弄',
                    bookclass: '男频都市',
                    booknum: '83.5万',
                    booklz: '完结'
                }, {
                    bookid: '41123',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    bookbreak: 25,
                    bookremarks: '预计字数200，存稿10',
                    booksr: '0/1/0.00',
                    bookxs: '上海市普陀区金沙江路 1518 弄',
                    bookclass: '男频都市',
                    booknum: '83.5万',
                    booklz: '连载'
                }, {
                    bookid: '1231234',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    bookbreak: 24,
                    bookremarks: '预计字数200，存稿10',
                    booksr: '0/1/0.00',
                    bookxs: '上海市普陀区金沙江路 1518 弄',
                    bookclass: '男频都市',
                    booknum: '83.5万',
                    booklz: '完结'
                }, {
                    bookid: '1231234',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    bookbreak: 24,
                    bookremarks: '预计字数200，存稿10',
                    booksr: '0/1/0.00',
                    bookxs: '上海市普陀区金沙江路 1518 弄',
                    bookclass: '男频都市',
                    booknum: '83.5万',
                    booklz: '完结'
                }, {
                    bookid: '1231234',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    bookbreak: 24,
                    bookremarks: '预计字数200，存稿10',
                    booksr: '0/1/0.00',
                    bookxs: '上海市普陀区金沙江路 1518 弄',
                    bookclass: '男频都市',
                    booknum: '83.5万',
                    booklz: '完结'
                }, {
                    bookid: '1231234',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    bookbreak: 24,
                    bookremarks: '预计字数200，存稿10',
                    booksr: '0/1/0.00',
                    bookxs: '上海市普陀区金沙江路 1518 弄',
                    bookclass: '男频都市',
                    booknum: '83.5万',
                    booklz: '完结'
                }, {
                    bookid: '1231234',
                    bookauthor: '王小虎',
                    booktime: '2012-12-12',
                    bookname: '无敌杀怒',
                    bookbreak: 24,
                    bookremarks: '预计字数200，存稿10',
                    booksr: '0/1/0.00',
                    bookxs: '上海市普陀区金沙江路 1518 弄',
                    bookclass: '男频都市',
                    booknum: '83.5万',
                    booklz: '完结'
                }]
            };
        },
        watch: {
            subscription (newVal) {
                this.subtrans = newVal;
                this.$emit('update:subscription', newVal);
            },
            subtrans (newVal) {
                this.$emit('update:subscription', newVal);
            }
        },
        methods: {
            handleCurrentChange (val) {
                this.cur_page = val;
                this.getData();
            },
            handleSizeChange (val) {
                console.log(`每页 ${val} 条`);
            },
            getData () {
                let self = this;
                if (process.env.NODE_ENV === 'development') {
                    self.url = '/ms/table/list';
                };
                self.$axios.post(self.url, {page: self.cur_page}).then((res) => {
                    self.tableData = res.data.list;
                });
            },
            search () {
                this.is_search = true;
            },
            handleSelectionChange (val) {
                this.multipleSelection = val;
            }
        }
    };
</script>

<style >
  .el-dialog{
    width: 60%;
  }
  .el-dialog__body{
    padding: 20px 20px;
  }

</style>
