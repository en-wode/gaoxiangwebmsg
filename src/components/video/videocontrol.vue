<template>
    <div class="contant">
        <div class="contant-top">
            <table border=1 width="1400">
                    <td width="255">
                        <object classid="clsid:54FC7795-1014-4BF6-8BA3-500C61EC1A05" id="EZUIKit" width="400" height="400" name="EZUIKit" ></object>
                    </td>
                    <td valign="bottom">
                        <table border >
                            <tr>
                                <td>
                                    <table border="1" width="1000" height="120">
                                        <tr height="20" width="300">
                                            <th style="background-color:#7CCD7C;">蓝翔项目监控云台控制系统</th>
                                        <tr>
                                            <td>
                                                <table border width="1200" height="100">
                                                    <tr>
                                                        <td>
                                                            <input type="button" value="开始播放" onclick="StartPlay()" style="display:block" id="startplaybtn"/>
                                                            <input type="button" value="结束播放" onclick="StopPlay()" style="display:none" id="stopplaybtn"/>
                                                        </td>
                                                        <td>
                                                            <textarea rows=8 cols=70 id="dataPanel" >{{watchlink}}</textarea>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <input type="button" value="截图" onclick="CapturePicture()" style="display:block" id="capturePicbtn"/>
                                                        </td>
                                                        <td><input type="text" id="picturename" />截图前需先命名</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>对讲</label>
                                                        </td>
                                                        <td>
                                                            <input type="button" value="开始" onclick="StartTalk()" style="display:block" id="starttalkbtn"  />
                                                            <input type="button" value="停止" onclick="StopTalk()" style="display:block" id="stoptalkbtn" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>云台</label>
                                                        </td>
                                                        <td>
                                                            <input type="button" value="上" onmousedown="StartUpPTZCtrl()" onmouseup="StopUpPTZCtrl()" style="display:block" id="ptzupbtn">
                                                            <input type="button" value="左" onmousedown="StartLeftPTZCtrl()" onmouseup="StopLeftPTZCtrl()" style="display:block" id="ptzleftbtn">
                                                            <input type="button" value="右" onmousedown="StartRightPTZCtrl()" onmouseup="StopRightPTZCtrl()" style="display:block" id="ptzrightbtn">
                                                            <input type="button" value="下" onmousedown="StartDownPTZCtrl()" onmouseup="StopDownPTZCtrl()" style="display:block" id="ptzdownbtn">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>播放结果</td>
                                                        <td><textarea rows=8 cols=70 id="showPanel" ></textarea></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
            </table>
            <div class="xuanze">
                <h3 class="select">选择观看设备</h3>
                <el-row>
                    <el-button round @click="watch(0)">铁路西外</el-button>
                    <el-button round @click="watch(1)">龙南河外</el-button>
                    <el-button round @click="watch(2)">丁卯外</el-button>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
    // import '../../assets/css/haikang.css'; // 字体图标
    import EZUIPlayer from 'ezuikit';
    export default {
        name: 'Devicevideo',
        data () {
            return {
                watchlink: '',
                xuanzhuan: [
                    {"AppKey":"77be9952adc9483a98e450c2999a85ab","AccessToken":"at.2xd3vcaf4sy91hyu6zxr8qqtdffz5q6h-54vm9fcb2e-00yjnp6-f91pddzm1","Url":"ezopen://open.ys7.com/D14812082/1.live"},
                ]
            }
        },
        created () {

        },
        mounted () {

        },
        methods: {
            watch (v) {
                console.log(v);
                if (!this.xuanzhuan[v]){
                    this.$message('当前设备未开启');
                }else {
                    this.watchlink = this.xuanzhuan[v];
                }
            }
        },
        computed: {

        }
    };
</script>

<style scoped>
    .contant-top{
        background: #fff;
        padding: 6px 12px;
    }
    .select{
        padding: 14px 8px;
    }
    .xuanze{
        padding: 18px 0;
    }
</style>
