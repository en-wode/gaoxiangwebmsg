<template>
    <div class="contant">
        <el-row class="contant-top" >
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="设备查询">
                    <el-select v-model="selectDevice" placeholder="设备序号">
                        <el-option
                                v-for="item in formInline.dataList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="selectzu" placeholder="历史记录">
                        <el-option
                                v-for="item in formInline.dataHistory"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
            <el-col :span="24">
                <div class="progress_box">
                    <canvas class="progress_bg"   id="canvasProgressbg" height="200" width="200" style="z-index: 0;top: 0px;">  </canvas>
                    <canvas class="progress_canvas"  id="canvasProgress" height="200" width="200" style="z-index: 1;">  </canvas>
                    <div class="progress_text">
                        <div class="progress_dot"></div>
                        <span class='progress_info'> 已为您工作<span>{{progress_txt}}</span>天</span>
                    </div>
                </div>
                <div class="contant-bottom">
                    <el-row>
                        <el-col :span="8" class="work">
                            警戒水位：<span class='tips'>正常运行</span>
                        </el-col>
                        <el-col :span="8" class="work">
                            液压电机：<span class='tips'>正常运行</span>
                        </el-col>
                        <el-col :span="8" class="work">
                            压力电机：<span class='tips'>正常运行</span>
                        </el-col>
                        <el-col :span="8" class="work">
                            闸门运行：<span class='tips'>正常运行</span>
                        </el-col>
                        <el-col :span="8" class="work">
                            警戒水位：<span class='tips'>正常运行</span>
                        </el-col>
                        <el-col :span="8" class="work">
                            监控运行：<span class='tips'>正常运行</span>
                        </el-col>
                    </el-row>
                    <div class="process">
                        <ul>
                            <li><span>排水闸门开度：</span><el-progress :text-inside="true" :stroke-width="16" :percentage="deviceData.paishui" color="#409EFF"></el-progress></li>
                            <li><span>截污闸门开度：</span><el-progress :text-inside="true" :stroke-width="16" :percentage="deviceData.jiewu" color="#409EFF"></el-progress></li>
                        </ul>
                    </div>
                    <div class="">

                    </div>
                </div>
                <div class="charts">
                    <div :style="{height:'300px',width:'100%',marginTop: '108px'}" ref='myEchart'></div>
                </div>
            </el-col>
            <!--<el-col :span="12">-->
                <!--<div id="divPlugin" class="plugin"></div>-->
            <!--</el-col>-->
        </el-row>
    </div>
</template>
<script>
    // import echarts from 'echarts';
    import { getIoData, equipmentList, getByEquipmentId } from '../../api/api';
    import * as util from '../../assets/js/util.js';
    import '../../assets/css/haikang.css'; // 字体图标
    export default {
        name: 'Devicestatus',
        data () {
            return {
                selectDevice: 22,
                selectzu: 'waterLevelInWell',
                formInline: {
                    dataList: [],
                    dataHistory: [{
                        value: 'waterLevelInWell',
                        label: '井内水位'
                    }, {
                        value: 'riveRaterLevel',
                        label: '河道水位'
                    }, {
                        value: 'ss',
                        label: 'ss'
                    }]
                },
                historyparam: {
                    data: '',
                    index: '',
                },
                deviceData: {},
                progress_txt: '正在匹配中...',
                count: 0, // 设置 计数器 初始为0
                countTimer: null, // 设置 定时器 初始为null
                initialized: false,
                currentTech: '',
                streams: {
                    rtmp: ''
                },
                playerOptions: {
                    height: '360',
                    sources: [{
                        type: 'rtmp/flv',
                        src: 'rtmp://rtmp.open.ys7.com/openlive/4134581a2f36441eb3132ba641f9d679'
                    }],
                    fluid: true,
                    autoplay: false,
                    controls: true,
                    poster: '',
                    notSupportedMessage: '此视频暂无法播放，请稍后再试'
                }
            };
        },
        created () {
            this.$nextTick(function () {
                // this.getequipment();
            })
        },
        mounted () {
            this.drawProgressbg();
            this.countInterval();
            this.getequipment();
            // this.deviceData();
            // setInterval(()=>{
            //     this.deviceData();
            // },3000)
        },
        computed: {
            player () {
                return this.$refs.videoPlayer.player;
            }
        },
        methods: {
            getequipment () {
                const that = this;
                const params ={userId: util.session('user').result.userId};
                equipmentList(params).then(function (response){
                    var list;
                    console.log(1)
                    for(list in response.data.result){
                        that.formInline.dataList.push( {value: response.data.result[list].id, label: response.data.result[list].equipmentName + '号设备'} ) ;
                        if(list == 0){
                            that.onSubmit(response.data.result[list].id);
                        }
                    }
                })
            },
            onSubmit(val) {
                const that = this;
                let params = {equipmentId: ''};
                let gethistory = {equipmentId: that.selectDevice,title: 'waterLevelInWell',time:'2018-07-18',index: 2};
                params.equipmentId = that.selectDevice;
                getIoData(params).then(function (response){
                    console.log(response);
                    that.deviceData = response.data.result;
                    that.deviceData.paishui = parseFloat((that.deviceData.sluiceOpeningDegree / that.deviceData.sewerageSluice * 100).toFixed(2));
                    that.deviceData.jiewu =parseFloat((that.deviceData.sluiceSluiceOpeningDegree / that.deviceData.sluiceHeight * 100).toFixed(2));
                    console.log(that.deviceData.paishui, that.deviceData.sewerageSluice)
                })
                getByEquipmentId(gethistory).then(function (response){
                    if(response.data.code === 1){
                        that.drawchart(response.data.result);
                    } else {
                        if (response.data.msg) {
                            console.log('无数据当前页面刷新了')
                        } else {
                            console.log(response.data.msg);
                        }
                    }
                })
            },
            onPlayerPlay (player) {
                alert('1');
            },
            onPlayerPause (player) {
                alert('pause');
            },
            drawCircle: function (step) {
                var c = document.getElementById('canvasProgress');
                var context = c.getContext('2d');
                // var context = wx.createCanvasContext('canvasProgress');
                // 设置渐变
                var gradient = context.createLinearGradient(200, 100, 100, 200);
                gradient.addColorStop(0, '#c471f5');
                gradient.addColorStop(0.5, '#ffb199');
                gradient.addColorStop(1, '#fa71cd');
                context.lineWidth = 14;
                context.strokeStyle = gradient;
                context.lineCap = 'round';
                context.beginPath();
                // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
                context.arc(100, 100, 90, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
                context.stroke();
            },
            drawProgressbg: function () {
                // 使用 wx.createContext 获取绘图上下文 context
                var b = document.getElementById('canvasProgressbg');
                var ctx = b.getContext('2d');
                // var ctx = wx.createCanvasContext('canvasProgressbg');
                ctx.lineWidth = 10;// 设置圆环的宽度
                ctx.strokeStyle = '#ccc';// 设置圆环的宽度
                ctx.lineCap = 'round';// 设置圆环的宽度
                ctx.beginPath(); // 开始一个新的路径
                ctx.arc(100, 100, 90, 0, 2 * Math.PI, false);
                // 设置一个原点(100,100)，半径为90的圆的路径到当前路径
                ctx.stroke(); // 对当前路径进行描边
            },
            countInterval: function () {
                // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
                this.countTimer = setInterval(() => {
                    if (this.count <= 60) {
                        this.drawCircle(this.count / (60 / 2));
                        this.count++;
                        this.progress_txt = this.count;
                    } else {
                        this.progress_txt = this.count;
                        clearInterval(this.countTimer);
                    }
                }, 40);
            },
            drawchart: function (value) {
                let that = this;
                let myChart = echarts.init(that.$refs.myEchart); // 这里是为了获得容器所在位置
                window.onresize = myChart.resize;
                var date = [];
                var data = [];
                for (var i = 1; i < value.length; i++) {
                    const datect = new Date(value[i].creatTime);
                    date.push([datect.getFullYear(), datect.getMonth() + 1, datect.getDate()].join('/'));
                    data.push(value[i].title);
                }
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    title: {
                        left: 'center',
                        text: '设备运转详情'
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: date
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 10
                    }, {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    series: [
                        {
                            name: '',
                            type: 'line',
                            smooth: true,
                            symbol: 'none',
                            sampling: 'average',
                            itemStyle: {
                                color: 'rgb(255, 70, 131)'
                            },
                            areaStyle: {normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgb(255, 158, 68)'
                                    }, {
                                        offset: 1,
                                        color: 'rgb(255, 70, 131)'
                                    }])}
                            },
                            data: data
                        }
                    ]
                };
                myChart.setOption(option, true);
            }
        }
    };
</script>

<style>
    /*进度条修改*/
    .contant-bottom .el-row{
        text-align: center!important;
    }
</style>
<style scoped>
    .contant{
        height: 100%;
    }
    .contant-top{
        background: #fff;
        padding: 6px 12px;
    }
    .title{
        font-size: 26px;
    }
    .title span{
        color: red;
        font-size: 38px;
    }
    .process{
        width: 90%;
        margin: 18px auto;
    }

    .process ul li {
       padding: 12px 0;
    }
    .process ul li span{
        padding: 8px 0;
        display: inline-block;
        font-size: 18px;
    }
    .progress_box{
        position: relative;
        /*  这里的宽高是必须大于等于canvas圆环的直径 否则绘制到盒子外面就看不见了
        一开始设置 width:440rpx; height:440rpx; 发现 在360X640分辨率的设备，下绘制的圆环跑盒子外去了
        小程序使用rpx单位适配 ，但是canvas绘制的是px单位的。所以只能用px单位绘制的圆环在盒子内显示 */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .progress_bg{
        position: absolute;
        width:210px;
        height: 210px;
    }
    .progress_canvas{
        width:210px;
        height: 210px;
    }
    .progress_text{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        margin:auto;
        left:0px;
        right: 0px;
        top:0px;
        bottom: 0px;
    }
    .progress_info{
        font-size: 14px;
        padding-left: 6px;
        letter-spacing: 2px;
    }
    .progress_info span{
        font-size: 20px;
        color: red;
    }
    .progress_dot{
        width:16px;
        height: 16px;
        border-radius: 50%;
        background-color: #fb9126;
    }
    .tips{
        color: #86ca1f;
    }
    .contant-bottom{
        margin-top: 36px;
    }
    .contant-bottom .work{
        margin-top: 16px;
        font-size: 16px;
    }
</style>
