<template>
    <div class='enterprise'>
        <el-row :gutter="12">
            <el-col :span="18">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="title">企业信息</span>
                    </div>
                    <div class="detail">
                        <el-row :gutter="20">
                            <el-col :span="4" class="card">
                                <p class="card-title">
                                    <span>经销商</span>
                                </p>
                                <p class="info">
                                    <span class="seller">7</span>家
                                </p>
                            </el-col>
                            <el-col :span="4" class="card">
                                <p class="card-title">
                                    <span>打码统计</span>
                                    <span class="fr check">本月</span>
                                    <span class="fr">上月</span>
                                </p>
                                <p class="info">
                                    制码<span class="goods">7</span>个
                                </p>
                            </el-col>
                            <el-col :span="4" class="card">
                                <p class="card-title">
                                    <span>售后服务</span>
                                </p>
                                <p class="info">
                                    <span>无差评</span>
                                </p>
                            </el-col>
                            <el-col :span="4" class="card">
                                <p class="card-title">
                                    <span>防伪警报</span>
                                </p>
                                <p class="info">
                                    待处理<span class="pending">7</span>次
                                </p>
                            </el-col>
                            <el-col :span="4" class="card">
                                <p class="card-title">
                                    <span>售后服务</span>
                                </p>
                                <p class="info">
                                    <span>无差评</span>
                                </p>
                            </el-col>
                            <el-col :span="4" class="card">
                                <p class="card-title">
                                    <span>售后服务</span>
                                </p>
                                <p class="info">
                                    <span>无差评</span>
                                </p>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>企业等级</span>
                    </div>
                    <div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="12" class="shouhou">
            <el-col :span="18">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="title">企业信息</span>
                        <span class="fr check">本月</span>
                        <span class="fr">上月</span>
                    </div>
                    <div class="detail">
                        <el-row :gutter="20">
                            <el-col :span="12" class="card">
                                <el-table
                                        :data="tableData"
                                        style="width: 100%">
                                    <el-table-column
                                            prop="date"
                                            label="序号"
                                            width="180">
                                    </el-table-column>
                                    <el-table-column
                                            prop="name"
                                            label="省份"
                                            width="180">
                                    </el-table-column>
                                    <el-table-column
                                            prop="address"
                                            label="故障分布">
                                    </el-table-column>
                                </el-table>
                            </el-col>
                            <el-col :span="4" class="card">
                                <p class="card-title">
                                    <span>故障归类</span>
                                </p>
                                <p class="info">
                                    制码<span class="goods">7</span>个
                                </p>
                            </el-col>
                            <el-col :span="4" class="card">
                                <p class="card-title">
                                    <span>责任判定</span>
                                </p>
                                <p class="info">
                                    <span>无差评</span>
                                </p>
                            </el-col>
                            <el-col :span="4" class="card">
                                <p class="card-title">
                                    <span>客户评价</span>
                                </p>
                                <div ref="evaluate"></div>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>新闻资讯</span>
                    </div>
                    <div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'echarts',
    props: ['userJson'],
    data () {
        return {
            tableData: [{
                date: '1',
                name: '山东省',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2',
                name: '上海市',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '3',
                name: '广东省',
                address: '上海市普陀区金沙江路 1519 弄'
            }]
        };
    },
    mounted () {
    },
    methods: {
    }
};
</script>

<style scoped>
    .el-card__header{
        padding: 12px 20px!important;
    }
    .title{
        font-size: 20px;
        font-weight: bold;
    }
    .clearfix{
        text-align: left;
    }
    .card{
        padding-bottom: 20px;
    }
    .box-card .card:not(:last-child) {
        border-right: 1px solid #ccc;
    }
    .card .card-title{
        font-weight: 600;
    }
    .check{
        text-decoration: underline;
        color: #3ea5f1;
        font-size: 16px;
        margin: 0 4px;
    }
    .info{
        text-align: center;
        margin: 42px auto;
    }
    .info span{
        font-size: 26px;
        letter-spacing: 8px;
    }
    .info .seller{
        color: #3ea5f1;
    }
    .info .goods, .info span{
        color: orange;
    }
    .info .pending{
        color: forestgreen;
    }
    .shouhou{
        margin-top: 16px;
    }
</style>
