<template lang="html">
    <div>
      <div class="template-tabs">
        <el-tabs
          v-model="activeIndex"
          type="card"
          closable
          @tab-click="tabClick"
          v-if="options.length"
          @tab-remove="tabRemove">
          <el-tab-pane
            :key="item.name"
            v-for="(item) in options"
            :label="item.name"
            :name="item.route">
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default{
    methods: {
        // tab切换时，动态的切换路由
        tabClick (tab) {
            let path = this.activeIndex;
            // 用户详情页的时候，对应了二级路由，需要拼接添加第二级路由
            this.$router.push({path: path});
        },
        tabRemove (targetName) {
            // 首页不可删除
            if (targetName.indexOf('home') >= 0) {
                return;
            }
            this.$store.commit('delete_tabs', targetName);
            if (this.activeIndex === targetName) {
            // 设置当前激活的路由
                if (this.options && this.options.length >= 1) {
                    this.$store.commit('set_active_index', this.options[this.options.length - 1].route);
                    this.$router.push({path: this.activeIndex});
                } else {
                    this.$router.push({path: '/'});
                }
            }
        }
    },
    computed: {
        options () {
            return this.$store.state.options;
        },
        activeIndex: {
            get () {
                return this.$store.state.activeIndex;
            },
            set (val) {
                this.$store.commit('set_active_index', val);
            }
        }
    },
    watch: {
        '$route' (to) {
            let flag = false;
            for (let option of this.options) {
                if (option.name === to.name) {
                    flag = true;
                    this.$store.commit('set_active_index', to.path);
                    break;
                }
            };
            if (!flag) {
                this.$store.commit('add_tabs', {route: to.path, name: to.name});
                this.$store.commit('set_active_index', to.path);
            }
        }
    }
};
</script>

<style >
  .template-tabs{
    padding-top: 32px;
  }
  .el-tabs__nav-scroll{
    height: 36px;
    line-height: 36px;
  }
  .el-tabs__item{
    color: white!important;
    background: #3ea5f1;
    border-radius: 4px 4px 0 0;
    margin-left: 10px;
  }
  .el-tabs__item.is-active{
    background: #ef4b4b;
    color: white!important;
  }
  .el-tabs__nav{
    color: white!important;
    border: none;
  }
  .el-tabs--card>.el-tabs__header{
    border-bottom: none;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item{
    border-left: none;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav{
    border: none;
  }

  .allpd {
    padding: 20px;
  }
  .el-tabs, .el-tabs--border-card {
    box-shadow: none;
    border: none;
  }
</style>
