<template>
    <div>About</div>
  </template>

<script>
// About.vue
export default {
    'name': 'AboutPage',
    'computed': {
        username() {
        // 我们很快就会看到 `params` 是什么
            return this.$route.params.username;
        }
    },
    'methods': {
        goToDashboard() {
        }
    }
};
</script>

  <style lang="scss" scoped>

  </style>