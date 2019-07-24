<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
    html,body {
        height: 100%;
    }
    #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: auto !important;
    background: #050D20 !important;
}
#app::-webkit-scrollbar {
    width:0 !important;   /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}

/* 兼容IE10+ */
#app { -ms-overflow-style: none; }

/* 但是firefox代码无效 */
#app{ overflow: -moz-scrollbars-none; }

</style>
