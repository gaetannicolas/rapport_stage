<template>
<main-layout>
  <div slot="content">
    C'est la page de garde !!!

    <p>Nom prenom</p>
    <p>année scolaire</p>
    <p>Licence Webdesign + Logo </p>
    <p>Problématique</p>
    <p>logo univ limoges</p>
    <p>logo fac des lettres </p>


    <nuxt-link to="sommaire">
      Sommaire
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
.pos-r {
  position: relative;
}
.minh-100 {
  min-height: 100vh;
}
.menu--position {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
</style>
