<script setup>
import DefaultLayoutWithVerticalNav from './components/DefaultLayoutWithVerticalNav.vue';
</script>

<template>
  <DefaultLayoutWithVerticalNav>
    <!-- <transition mode="out-in" enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOut"> -->
    <RouterView />
    <!-- </transition> -->
  </DefaultLayoutWithVerticalNav>
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
