<template lang="html">
    <div>
        <el-dialog :visible.sync="funcset" title="常用功能管理">
            <div class="drag-box-left">
                <div class="drag-list" draggable="true"
                     v-for="(list,index) in data1"
                     :data-id="list.id"
                     @dragstart="dragstartEvent"
                     @dragend="dragendEvent"
                     @dragenter="dragenterEvent"
                     @dragleave="dragleaveEvent"
                     @dragover="dragoverEvent"
                     v-bind:key="list.id"
                >
                    <td><el-checkbox v-model="list.checked"></el-checkbox></td>
                    <td>{{list.id}}</td>
                    <td>{{list.title}}</td>
                    <td><el-color-picker v-model="list.color"></el-color-picker></td>
                    <td>{{list.id}}</td>
                    <td><i class="el-icon-delete" ></i></td>
                </div>
            </div>
            <el-popover
                    ref="popover"
                    placement="right"
                    width="600"
                    trigger="click">
                <el-transfer v-model="value1" :data="data"></el-transfer>
            </el-popover>
            <div class="edite-funcset">
                <el-button  v-popover:popover>编辑</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
export default{
    props: ['dialogfuncset'],
    data () {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`,
                    disabled: i % 4 === 0
                });
            }
            return data;
        };
        return {
            data: generateData(),
            value1: [1, 4],
            funcset: false,
            dragElement: null,
            lock: true,
            data1: [
                {checked: true, id: 1, title: '这里是列表1', color: '#fff'},
                {checked: true, id: 2, title: '这里是列表2', color: '#ccc'},
                {checked: false, id: 3, title: '这里是列表3', color: '#000'},
                {checked: true, id: 4, title: '这里是列表', color: '#fff'}
            ]
        };
    },
    watch: {
        dialogfuncset (newVal) {
            this.funcset = newVal;
            this.$emit('update:dialogfuncset', newVal);
        },
        funcset (newVal) {
            this.$emit('update:dialogfuncset', newVal);
        }
    },
    methods: {
        dragstartEvent (ev) {
            const self = this;
            self.dragElement = ev.target;
        },
        dragendEvent (ev) {
            ev.preventDefault();
        },
        dragenterEvent (ev) {
            const self = this;
            if (ev.target.className === 'drag-list') {
                if (self.dragElement !== ev.target) {
                    ev.target.parentNode.insertBefore(self.dragElement, ev.target);
                }
            }
        },
        dragleaveEvent (ev) {
            const self = this;
            if (self.dragElement !== ev.target) {
                if (self.lock && (ev.target === ev.target.parentNode.lastElementChild || ev.target === ev.target.parentNode.lastChild)) {
                    ev.target.parentNode.appendChild(self.dragElement);
                    self.lock = false;
                } else {
                    self.lock = true;
                }
            }
        },
        dragoverEvent (ev) {
            ev.preventDefault();
        }
    }
};
</script>
<style scoped>
    .drag-box-left{
        float: left;
        width: 100%;
    }
    .drag-box-right{
        float: right;
        width: 45%;
    }
    .drag-list{
        padding:4px;
        cursor: move;
        transition: border .3s;
    }
    .drag-list:hover{
        border: 1px solid #20a0ff;
    }
    .drag-list td {
        text-align: center;
        display: inline-block;
        width: 20%;
    }
    .drag-list td:first-child,td:last-child {
        width: 6%;
    }
    .drag-list td:nth-child(2){
        width: 6%;
    }
    .drag-list td:nth-child(3){
        width: 32%;
    }
    .drag-list td:nth-child(5){
        width: 8%;
    }
    /*颜色选择器*/
    .el-color-picker{
        vertical-align: middle;
    }
    .el-color-picker__trigger{
        height: 30px;
    }
    .drag-list:nth-child(2n-1){background-color: #f2f2f2}
    .edite-funcset{
        color: #3ea5f1;
        position: absolute;
        right: 28px;
        bottom: 28px;
        font-size: 46px;
        cursor: pointer;
    }
    .edite-funcset .el-icon-circle-plus{text-shadow: 0 0px 3px;font-size: 46px}
</style>

