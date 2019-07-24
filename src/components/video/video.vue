<template>
    <div class="contant">
        <div class="contant-top">
            <el-row class="contant-top" :gutter="2">
                <el-col :span="8" >
                    <video id="czPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp.open.ys7.com/openlive/4134581a2f36441eb3132ba641f9d679" type="" />
                        <source src="http://hls.open.ys7.com/openlive/4134581a2f36441eb3132ba641f9d679.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>常州井内监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="lxwPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp.open.ys7.com/openlive/ae3998a1752b437dbbc5d94759550ac4" type="" />
                        <source src="http://hls.open.ys7.com/openlive/ae3998a1752b437dbbc5d94759550ac4.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>蓝翔井外监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="lxnPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp.open.ys7.com/openlive/e83e2d16ccb44544baf39cbb41cd1dc1" type="" />
                        <source src="http://hls.open.ys7.com/openlive/e83e2d16ccb44544baf39cbb41cd1dc1.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>蓝翔井内监控</p>
                </el-col>
                <el-col :span="8" >
                    <video id="zs1wPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp.open.ys7.com/openlive/c308c6c9fb604ed392d9f6d7aa0b2dd4" type="" />
                        <source src="http://hls.open.ys7.com/openlive/c308c6c9fb604ed392d9f6d7aa0b2dd4.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>中山1号井外监控</p>
                </el-col>
                <el-col :span="8" >
                    <video id="zs1nPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp.open.ys7.com/openlive/87d031b9efce466db47f79a6b29c4e79" type="" />
                        <source src="http://hls.open.ys7.com/openlive/87d031b9efce466db47f79a6b29c4e79.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>中山1号井内监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="zs2nPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp.open.ys7.com/openlive/27a4baca83c3427abd9a71dde435b5df" type="" />
                        <source src="http://hls.open.ys7.com/openlive/27a4baca83c3427abd9a71dde435b5df.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>中山2号井内监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="zs2wPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp.open.ys7.com/openlive/3e264de324354e07912577436eab8161" type="" />
                        <source src="http://hls.open.ys7.com/openlive/3e264de324354e07912577436eab8161.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>中山2号井外监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="zs3nPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp.open.ys7.com/openlive/5bceb492a392439bb5b83575eee40db5" type="" />
                        <source  src="http://hls.open.ys7.com/openlive/5bceb492a392439bb5b83575eee40db5.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>中山3号井内监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="zs3wPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp.open.ys7.com/openlive/7b40633cc194479fa6335306178afab0" type="" />
                        <source src="http://hls.open.ys7.com/openlive/7b40633cc194479fa6335306178afab0.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>中山3号井外监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="yjhnPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp01open.ys7.com/openlive/8690fd7b9a2c4e3cac62896ce0382534" type="" />
                        <source  src="http://hls01open.ys7.com/openlive/8690fd7b9a2c4e3cac62896ce0382534.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>跃进河内监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="yjhwPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp01open.ys7.com/openlive/9d5b9922fa1149c4956696a35be546b7" type="" />
                        <source src="http://hls01open.ys7.com/openlive/9d5b9922fa1149c4956696a35be546b7.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>跃进河外监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="tlxnPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp01open.ys7.com/openlive/ccd765329da54799a944adab910473cd" type="" />
                        <source  src="http://hls01open.ys7.com/openlive/ccd765329da54799a944adab910473cd.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>铁路西内监控</p>
                </el-col>
                <el-col :span="8">
                    <video id="tlxwPlayer" class="myPlayer" poster="" muted controls playsInline webkit-playsinline autoplay style="height: 200px;width: 340px">
                        <source src="rtmp://rtmp01open.ys7.com/openlive/7a2b4d7f1c9042829716265d20943d0b" type="" />
                        <source src="http://hls01open.ys7.com/openlive/7a2b4d7f1c9042829716265d20943d0b.m3u8" type="application/x-mpegURL" />
                    </video>
                    <p>铁路西外监控</p>
                </el-col>
            </el-row>
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

            }
        },
        created () {

        },
        mounted () {
            var playercz = new EZUIPlayer('czPlayer');
            var lxwPlayer = new EZUIPlayer('lxwPlayer');
            var lxnPlayer = new EZUIPlayer('lxnPlayer');
            var zs2nPlayer = new EZUIPlayer('zs2nPlayer');
            var zs1wPlayer = new EZUIPlayer('zs1wPlayer');
            var zs1nPlayer = new EZUIPlayer('zs1nPlayer');
            var zs2wPlayer = new EZUIPlayer('zs2wPlayer');
            var zs3nPlayer = new EZUIPlayer('zs3nPlayer');
            var zs3wPlayer = new EZUIPlayer('zs3wPlayer');
            var yjhwPlayer = new EZUIPlayer('yjhwPlayer');
            var yjhnPlayer = new EZUIPlayer('yjhnPlayer');
            var tlxnPlayer = new EZUIPlayer('tlxnPlayer');
            var tlxwPlayer = new EZUIPlayer('tlxwPlayer');
            tlxwPlayer.pause();
            tlxnPlayer.pause();
            yjhnPlayer.pause();
            yjhwPlayer.pause();
            playercz.pause();
            lxnPlayer.pause();
            lxwPlayer.pause();
            zs2wPlayer.pause();
            zs3wPlayer.pause();
            zs3nPlayer.pause();
            zs2nPlayer.pause();
            zs1wPlayer.pause();
            zs1nPlayer.pause();
            setTimeout(function () {
                playercz.play();
                lxnPlayer.play();
                lxwPlayer.play();
                zs2wPlayer.play();
                zs3wPlayer.play();
                zs3nPlayer.play();
                zs2nPlayer.play();
                zs1wPlayer.play();
                zs1nPlayer.play();
            }, 150);
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
    .contant-top .el-col{
        text-align: center;
        margin-bottom: 10px;
        border: 1px solid #d8e0e7;
        padding-top: 8px;
    }
    .contant-top .el-col p{
        font-size: 22px;
        line-height: 26px;
        padding: 12px 0px;
    }
</style>
