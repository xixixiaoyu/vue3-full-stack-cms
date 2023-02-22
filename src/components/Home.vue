<template>
  <div class="basic-layout">
    <div class="nav-side"></div>
    <div class="content-right">
      <div class="nav-top"></div>
      <div class="wrapper">
        <div class="main-page">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: 0.5s;
  }
  .content-right {
    margin-left: 200px;
    .nav-top {
      display: flex;
      justify-content: space-between;
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      border-bottom: 1px solid #ddd;
    }
    .wrapper {
      padding: 20px;
      height: calc(100vh - 50px);
      background-color: #eef0f3;
      .main-page {
        height: 100%;
        background-color: #fff;
      }
    }
  }
}
</style>
