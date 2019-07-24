<template>
    <div class="sidebar">
        <VueScrollbar  custom-class="my-scrollbar" ref="Scrollbar">
            <el-menu :default-active="$route.path" class=" " theme="dark" router>
                <el-autocomplete
                    size="small"
                    popper-class="my-autocomplete"
                    class="inline-input"
                    v-model="state2"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    :trigger-on-focus="false"
                    @select="searchtap"
                >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    <template slot-scope="props">
                        <div class="name" @click="searchrout(props.item.index)" >{{ props.item.name }}</div>
                    </template>
                </el-autocomplete>
                <template v-for="item in select">
                    <template v-if="item.subs">
                        <el-submenu :index="item.index"  :title="item.name" :key="item.index">
                            <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
                            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index" :title="subItem.name">{{ subItem.name }}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.index" :title="item.name" :key="item.index">
                            <i :class="item.icon"></i>{{ item.name }}
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
        </VueScrollbar>
    </div>
</template>

<script>
import VueScrollbar from 'vue2-scrollbar';
require('../../../node_modules/vue2-scrollbar/dist/style/vue2-scrollbar.css');
require('../../../node_modules/vue2-scrollbar/dist/style/app.css');
export default {
    components: {
        VueScrollbar
    },
    data () {
        return {
            restaurants: [],
            state2: '',
            select: [],
            list: [
                {
                    icon: 'el-icon-setting',
                    index: '/Showpage',
                    name: '控制台'
                },
                {
                    icon: 'el-icon-menu',
                    index: '2',
                    name: '设备详情',
                    subs: [
                        {
                            index: '/Devicestatus',
                            name: '设备状态'
                        }
                    ]
                },
                {
                    icon: 'el-icon-menu',
                    index: '3',
                    name: '视频监控',
                    subs: [
                        {
                            index: '/Devicevideo',
                            name: '视频监控'
                        },
                        {
                            index: '/Videocontrol',
                            name: '监控云控'
                        }
                    ]
                },
                {
                    icon: 'el-icon-menu',
                    index: '4',
                    name: '历史记录',
                    subs: [
                        {
                            index: '/history/waterLevelInWell',
                            name: '水位'
                        },
                        {
                            index: '/history/riveRaterLevel',
                            name: '雨量'
                        },
                        {
                            index: '/history/ss',
                            name: '水质'
                        }
                    ]
                },
                {
                    icon: 'el-icon-menu',
                    index: '5',
                    name: '企业信息',
                    subs: [
                        {
                            index: '/Enterprise',
                            name: '企业信息'
                        }
                    ]
                }
            ]
        };
    },
    created () {
        this.select = this.list;
        this.$nextTick(() => {
        });
    },
    computed: {
        options () {
            return this.$store.state.options;
        },
        fadmin () {
            return this.$store.state.fadmin;
        }
    },
    methods: {
        searchrout (routpath) {
            this.$router.push({path: routpath});
        },
        querySearch (queryString, cb) {
            var restaurants = this.select;
            var that = this;
            var results = [];
            console.log(restaurants);
            restaurants.forEach(function (value, index, array) {
                if (value.subs) {
                    results = results.concat(queryString ? value.subs.filter(that.createFilter(queryString)) : restaurants);
                }
            });
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter (queryString) {
            return (restaurant) => {
                return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) >= 0);
            };
        },
        searchtap () {
            console.log(1);
        }
    },
    watch: {
        fadmin: function (val) {
            this.select = this[val];
        }
    },
    mounted () {
        // 刷新时以当前路由做为tab加入tabs
        if (this.$route.path !== '/' && this.$route.path.indexOf('home') === -1) {
            this.$store.commit('add_tabs', {route: '/index/home', name: '首页'});
            this.$store.commit('add_tabs', { route: this.$route.path, name: this.$route.name });
            this.$store.commit('set_active_index', this.$route.path);
        } else {
            this.$store.commit('add_tabs', {route: '/index/home', name: '首页'});
            this.$store.commit('set_active_index', '/index/home');
        }
        this.restaurants = this.items;
    }
};
</script>

<style scoped>
    .name{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }

    .el-autocomplete{
        margin: 10px 0 6px 8px;
    }
    .vue-scrollbar__wrapper{
        max-height: 800px;
    }

    [class*="icon-"]{
        vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
    }
    .inline-input{
        width: 158px;
    }
    .el-menu{
        background: #101010;
    }

</style>
