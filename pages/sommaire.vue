<template>
<main-layout>
  <div slot="content">
    Sommaire
    <nuxt-link to="introduction">
      Intro
    </nuxt-link>
  </div>
</main-layout>
</template>

<script>
import MainLayout from "~/components/MainLayout.vue";

export default {
  components: {
    MainLayout
  }
};
</script>

<style>
</style>
