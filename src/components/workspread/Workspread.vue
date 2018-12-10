<template>
    <div class='echarts'>
        <h1 id="title">高翔水务大数据管理平台</h1>
        <el-row class="contant-top">

        </el-row>
    </div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/map/js/china.js'; // 引入中国地图数据
export default {
    name: 'echarts',
    props: ['userJson'],
    data () {
        return {
            chart: null,
            geoCoordMap: {
                '中山1号': [113.36752, 22.494457],
                '中山2号': [113.36772, 22.49447],
                '中山3号': [113.368, 22.491938],
                '常州横山桥': [120.1215057, 31.7588482]
            },
            data: [
                {name: '中山1号', value: ['正常']},
                {name: '中山2号', value: ['正常']},
                {name: '中山3号', value: ['正常']},
                {name: '常州横山桥', value: ['正常']}
            ]
        };
    },
    mounted () {
        this.chinaConfigure();
    },
    beforeDestroy () {
        if (!this.chart) {
            return;
        }
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        convertData (data) {
            let that = this;
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = that.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            console.log(res);
            return res;
        },
        chinaConfigure () {
            let that = this;
            let myChart = echarts.init(this.$refs.myEchart); // 这里是为了获得容器所在位置
            window.onresize = myChart.resize;
            myChart.setOption({ // 进行相关配置
                backgroundColor: '#404a59',
                title: {
                    text: '高翔工程中国分布情况',
                    subtext: '内部使用禁止发布',
                    sublink: 'http://39.107.105.1:4396/',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        return params.name + ' : ' + params.value[2];
                    }
                }, // 鼠标移到图里面的浮动提示框
                // visualMap: {
                //     min: 0,
                //     max: 200,
                //     calculable: true,
                //     inRange: {
                //         color: ['#50a3ba', '#eac736', '#d94e5d']
                //     },
                //     textStyle: {
                //         color: '#fff'
                //     }
                // },
                geo: { // 这个是重点配置区
                    map: 'china', // 表示中国地图
                    roam: true,
                    label: {
                        normal: {
                            show: true, // 是否显示对应地名
                            textStyle: {
                                color: '#ccc'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(0, 0, 0, 0.2)',
                            areaColor: '#323c48', // 背景颜色
                            color: 'white',
                            shadowBlur: 50,
                            label: {
                                show: true // 显示名称
                            }
                        },
                        emphasis: {
                            areaColor: '#fff',
                            color: '#ccc',
                            borderWidth: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                },
                series: [
                    {
                        name: '销量',
                        type: 'scatter',
                        coordinateSystem: 'geo', // 对应上方配置
                        data: that.convertData(that.data)
                    },
                    {
                        name: '重点区域',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: that.convertData(that.data),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    }
                ]
            });
            myChart.on('click', function (params) {
                console.log(params.data.value);
            });
        }
    }
};
</script>

<style scoped>
    .echarts{
        background: #050D20;
    }
    #title{
        text-align: center;
        margin: 12px auto;
    }
</style>
