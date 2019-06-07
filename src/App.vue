<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--    </div>-->
    <router-view />
  </div>
</template>

<style>
  /*  意在解决click事件在移动端有个300ms延时
      就是因为避免和手机双击行为发生冲突。然而，当我们设置了touch-action:manipulation干掉了双击行为
  */
  html {
    touch-action: manipulation;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
