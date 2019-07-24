<template>
    <div class="contant">
        <div class="contant-top">
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
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
            <div class="charts">
                <div :style="{height:'600px',width:'95%',marginTop: '108px',marginBottom: '68px'}" ref='myEchart'></div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts';
import { getIoData, equipmentList, getByEquipmentId } from '../../api/api';
import * as util from '../../assets/js/util.js';

export default {
    name: 'history',
    data () {
        return {
            selectDevice: 22,
            formInline: {
                dataList: []
            },
        }
    },
    created () {
        console.log(this.$route.params.id)
    },
    mounted () {
        this.drawchart(this.$route.params.id);
        this.getequipment();
    },
    methods: {
        getequipment () {
            const that = this;
            const params ={userId: util.session('user').result.userId};
            equipmentList(params).then((response)=>{
                console.log(response)
                var list;
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
            let gethistory = {equipmentId: that.selectDevice,title: that.$route.params.id};
            params.equipmentId = that.selectDevice;
            getIoData(params).then((response)=>{
                console.log(response)
                that.deviceData = response.data.result;
                that.deviceData.paishui = parseFloat((that.deviceData.sluiceOpeningDegree / that.deviceData.sewerageSluice * 100).toFixed(2));
                that.deviceData.jiewu =parseFloat((that.deviceData.sluiceSluiceOpeningDegree / that.deviceData.sluiceHeight * 100).toFixed(2));
                console.log(that.deviceData.paishui, that.deviceData.sewerageSluice)
            })
            getByEquipmentId(gethistory).then((response)=>{
                if(response.data.code === 1){
                    that.drawchart(response.data.result);
                } else {
                    console.log('暂无数据');
                }
            })
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

<style scoped>
    .contant{
        height: 100%;
    }
    .contant-top{
        background: #fff;
        padding: 6px 12px;
    }
</style>
