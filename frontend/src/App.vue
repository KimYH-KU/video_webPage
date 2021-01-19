<template>
  <div>
    <div>
      <router-link to="/home">Home</router-link> |
      <router-link to="/list">List</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
