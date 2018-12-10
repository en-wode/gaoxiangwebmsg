<template>
    <div class="table">
        <div class="handle-box">
            <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
            <div id="yuan" :style="{width: '500px', height: '500px'}"></div>
            <div id="line" :style="{width: '500px', height: '500px'}"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    let echarts = require('../../../static/js/echarts.common.min');
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        },
        mounted () {
            this.drawLine();
            this.yuan();
            this.line();
        },
        methods: {
            drawLine () {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('myChart'));
                // 绘制图表
                myChart.setOption({
                    title: { text: '柱状图' },
                    tooltip: {},
                    xAxis: {
                        data: ['玄幻', '校园', '恋爱', '生活', '修仙', '都市']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            },
            yuan () {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('yuan'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问', '掌阅', 'wap', 'PC', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '掌阅'},
                                {value: 234, name: 'wap'},
                                {value: 135, name: 'PC'},
                                {value: 1548, name: '搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
            line () {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('line'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '对数轴示例',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}'
                    },
                    legend: {
                        left: 'left',
                        data: ['2的指数', '3的指数']
                    },
                    xAxis: {
                        type: 'category',
                        name: 'x',
                        splitLine: {show: false},
                        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'log',
                        name: 'y'
                    },
                    series: [
                        {
                            name: '3的指数',
                            type: 'line',
                            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
                        },
                        {
                            name: '2的指数',
                            type: 'line',
                            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
                        },
                        {
                            name: '1/2的指数',
                            type: 'line',
                            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
                        }
                    ]
                });
            }
        }
    };
</script>
