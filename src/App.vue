<script>
export default {
  mounted() {
    this.$request.get("/login").then(res => {
      console.log(res);
    });
  },
};
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
