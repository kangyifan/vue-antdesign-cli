<template>
  <div>
    Home
    <a-button>Add</a-button>
  </div>
</template>

<script>
// Home.vue
export default {
    'name': 'HomePage',
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