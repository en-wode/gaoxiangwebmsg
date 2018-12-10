<template lang="html">
    <div>
        <el-dialog :visible.sync="setbang" title="修改榜单">
            <div class="handle-contain">
                <el-form :inline="true" :model="formInline" >
                    <div>
                        <el-form-item label="书号">
                            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                        <el-form-item label="书名">
                            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                        <el-form-item label="分类">
                            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="目标链接" class="mg0">
                            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input" ></el-input>
                        </el-form-item>
                        <el-form-item label="颜色" class="mg0">
                            <el-color-picker v-model="formInline.color" size="small"></el-color-picker>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="标题" class="bang_title">
                            <el-input v-model="formInline.intro" type="textarea" :rows="4" class="bang_title_contain" :maxlength="20"></el-input>
                        </el-form-item>
                    </div>
                    <div class="bang_pd">
                        <el-upload
                            ref="upload"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :auto-upload="false">
                            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                            <span slot="tip" class="el-upload__tip ft-red">只能上传jpg/png文件，且不超过500kb</span>
                        </el-upload>
                    </div>
                    <el-row>
                        <el-col :span="16">
                            <p><label>上次提交人:</label>admin</p>
                            <p><label>上次提交时间:</label>2018-06-08  15: 08: 03 </p>
                        </el-col>
                        <el-col :span="8">
                            <div class="txct">
                                <el-button type="primary" icon="search" @click="submint">提交</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: ['mbang'],
        data () {
            return {
                setbang: false,
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                formInline: {
                    guizename: '',
                    bookname: '',
                    bangset: '',
                    delivery: '',
                    color: '',
                    intro: ''
                }
            };
        },
        watch: {
            mbang (newVal) {
                this.setbang = newVal;
                this.$emit('update:setbang', newVal);
            },
            setbang (newVal) {
                this.$emit('update:mbang', newVal);
            }
        },
        methods: {
            submitUpload () {
                this.$refs.upload.submit();
            },
            handleRemove (file, fileList) {
                console.log(file, fileList);
            },
            handlePreview (file) {
                console.log(file);
            },
            submint () {
                console.log(1);
            }
        }
    };
</script>
<style scoped>
    .el-form--inline .el-form-item {
        min-width: auto;
    }
    .handle-contain .bang_title{
        width: 100%;
    }
    .handle-contain .bang_title >>> .el-form-item__content {
        width: 94%;
        margin-left: 20px;
    }
    .handle-contain .el-row p ,.handle-contain .bang_pd{
        padding-left: 18px;
    }
    .handle-contain .bang_pd{
        padding-bottom: 6px;
    }
    .handle-contain .el-row label {
        padding-right: 16px;
        color: #b9b6b6
    }
</style>