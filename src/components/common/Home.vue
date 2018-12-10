<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view class=""></router-view></transition>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
export default {
    components: {
        vHead, vSidebar
    },
    created () {
        this.setfamin(sessionStorage.fadmin);
    },
    data () {
        return {
            faminsw: false
        };
    },
    computed: {
        swfadmin () {
            return this.$store.state.swfadmin;
        }
    },
    methods: {
        setfamin (val) {
            let vm = this;
            if (val === '' || typeof (val) === 'undefined') {
                vm.faminsw = true;
            }
        }
    },
    watch: {
        swfadmin (val) {
            let vm = this;
            vm.faminsw = val;
        }
    }
};
</script>

<style>
  .content {
    padding: 0;
  }
</style>
