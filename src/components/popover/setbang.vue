<template lang="html">
    <div>
        <el-dialog :visible.sync="setbang" title="修改榜单">
            <div class="handle-contain">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <div>
                        <el-form-item label="榜单名称">
                            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="榜单列表数量">
                            <el-input v-model="formInline.bookname" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="顺序滚动显示">
                            <el-switch v-model="formInline.delivery"></el-switch>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="多少秒滚动一次">
                            <el-input v-model="formInline.guizename" placeholder="请输入内容" class="handle-input"></el-input>
                        </el-form-item>
                    </div>
                    <div class="txct">
                        <el-button type="primary" icon="search" @click="submint">提交</el-button>
                    </div>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: ['showbang'],
        data () {
            return {
                setbang: false,
                formInline: {
                    guizename: '',
                    bookname: '',
                    bangset: '',
                    delivery: ''
                }
            };
        },
        watch: {
            showbang (newVal) {
                this.setbang = newVal;
                this.$emit('update:setbang', newVal);
            },
            setbang (newVal) {
                this.$emit('update:showbang', newVal);
            }
        },
        methods: {
            submint () {
                console.log(1);
            }
        }
    };
</script>
<style scoped>
    .handle-contain{
        margin: 22px auto;
        width: 80%;
    }
    .handle-contain >>> .el-input{
        width: 268px;
    }
    .handle-contain >>> .el-form-item__label{
        min-width: 140px;
        text-align: left;
        margin-right: 44px;
    }
</style>