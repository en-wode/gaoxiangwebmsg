<template>
    <div>
        <div class="crumbs">
            <h3 class="usual"><span class="ft-blue">XXX</span>下午好，欢迎登陆高翔水务后台</h3>
            <p>您上次登陆时间：2017-12-22  12:05:03 <span class="ft-blue">（打开上次操作界面？）</span></p>
        </div>
        <el-row>
            <el-col :span="15" class="ability">
                <div class="ms-doc">
                    <h3 class="usual">常用功能</h3>
                    <article class="gtasks_list gtasks_func">
                        <el-row>
                            <el-col :span="4">
                                <p class="func">
                                    <span class="nav_first">设备详情</span>
                                    <span class="nav_second">设备状态</span>
                                </p>
                                <p>
                                </p>
                            </el-col>
                            <el-col :span="4">
                                <p class="func">
                                    <span class="nav_first">设备详情</span>
                                    <span class="nav_second">设备监控</span>
                                </p>
                                <p>
                                </p>
                            </el-col>
                            <el-col :span="4">
                                <p class="func">
                                    <span class="nav_first">历史记录</span>
                                    <span class="nav_second">井内水位</span>
                                </p>
                                <p>
                                </p>
                            </el-col>
                            <el-col :span="4">
                                <p class="func">
                                    <span class="nav_first">历史记录</span>
                                    <span class="nav_second">河道水位</span>
                                </p>
                                <p>
                                </p>
                            </el-col>
                            <el-col :span="4">
                                <p class="func">
                                    <span class="nav_first">历史记录</span>
                                    <span class="nav_second">下雨雨量</span>
                                </p>
                                <p>
                                </p>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <p class="func">
                                    <span class="nav_first">设备报修</span>
                                    <span class="nav_second">设备报警</span>
                                </p>
                                <p>
                                </p>
                            </el-col>
                            <el-col :span="4">
                                <p class="func">
                                    <span class="nav_first">消息通知</span>
                                    <span class="nav_second">待办事项</span>
                                </p>
                                <p>
                                </p>
                            </el-col>
                        </el-row>
                    </article>
                </div>
            </el-col>
            <el-col :span="9">
                <div class="calend">
                    <calendar  :lunar="calendar.lunar" :value="calendar.value"  @select="calendar.select" ></calendar>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div class="ms-doc">
                    <h3 class="gtasks">待办事项</h3>
                    <article class="gtasks_list">
                        <p class="tip"><span class="ft-red">7个</span>待办处理</p>
                        <ul>
                            <li>上午<span class="ft-blue decore">11:00</span>开会，无论你在做什么计划，无论任务大小，都能帮助你轻松完成任务。</li>
                            <li>上午<span class="ft-blue decore">11:00</span>开会，无论你在做什么计划，无论任务大小，都能帮助你轻松完成任务。</li>
                            <li>上午<span class="ft-blue decore">11:00</span>开会，无论你在做什么计划，无论任务大小，都能帮助你轻松完成任务。</li>
                            <li>上午<span class="ft-blue decore">11:00</span>开会，无论你在做什么计划，无论任务大小，都能帮助你轻松完成任务。</li>
                        </ul>
                        <!--            <el-pagination
                                      layout="prev, pager, next"
                                      :total="50">
                                    </el-pagination>-->
                    </article>
                </div>
            </el-col>
            <el-col :span="7" class="mgl20">
                <div class="ms-doc ">
                    <h3 class="notice">通知</h3>
                    <article class="gtasks_list">
                        <ul>
                            <li>元旦放假通知 <span class="ft-gray fr">2017.1.25 14:03</span></li>
                            <li>元旦放假通知 <span class="ft-gray fr">2017.1.25 14:03</span></li>
                            <li>元旦放假通知 <span class="ft-gray fr">2017.1.25 14:03</span></li>
                        </ul>
                    </article>
                </div>
            </el-col>
            <el-col :span="8" class="mgl20">
                <div class="ms-doc ">
                    <h3 class="reminder">备忘录</h3>
                    <article class="gtasks_list">
                        <ul>
                            <li>后台界面整改 <span class="ft-gray fr">2017.1.25 14:03</span></li>
                            <li>PC站界面修改 <span class="ft-gray fr">2017.1.25 14:03</span></li>
                            <li>后台php功能的整理及添加 <span class="ft-gray fr">2017.1.25 14:03</span></li>
                        </ul>
                    </article>
                </div>
            </el-col>
        </el-row>
        <!--弹框-->
        <!--<div>-->
            <!--<funset :dialogfuncset.sync = "dialogfuncset"></funset>-->
        <!--</div>-->
        <!--弹框end-->
    </div>
</template>
<script>
import calendar from '../template/calendar.vue';
// import funset from '../popover/funcSet.vue';
export default {
    components: {
        calendar
        // funset
    },
    created () {
        this.getyear();
        this.open(); // 提示框
    },
    data () {
        return {
            // dialogfuncset: false, // 常用功能设置
            calendar: {
                range: true,        // 是否开启范围
                value: [],           // 默认日期
                lunar: true,        // 显示农历
                select (value) {
                    console.log(value.toString());
                }
            },
            bianji1: [
                {
                    icon: 'el-icon-setting',
                    index: '/index/home',
                    name: '首页'
                }]
        };
    },
    methods: {
        // dialogfunc () {
        //     this.dialogfuncset = true;
        // },
//      日历初始化
        getyear () {
            let now = new Date();
            this.year = now.getFullYear();
            this.month = now.getMonth();
            this.day = now.getDate();
            this.calendar.value = [ this.year, this.month + 1, this.day ];
        },
        open () {
            const h = this.$createElement;
            this.$notify({
                title: '您有一个待办事项还未完成',
                message: h('i', '请在下午3点到办公室开会')
            });
        }
    }
};
</script>

