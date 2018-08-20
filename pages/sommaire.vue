<template>

  <div>
    Sommaire
    <nuxt-link to="introduction">
      Intro
    </nuxt-link>
    Partie 1 : Le contexte
      --> X-Prime
      --> Appstud

    Partie 2 : un projet de grande envergure
      --> Présentation globale
      --> Les contraintes techniques et humaines
      --> Organisation coté web

    Partie 3 : Ma place dans le projet
      --> Mes missions
      --> Les difficultés rencontrés
      --> L'adaptation au projet

    Mon bilan
      --> Ce que j'ai essayé d'apporter
      --> Les apports de la formation
      --> Mon évolution personnelle et professionnel

      Remerciement

      <expand
        title="1- Un porjet de grande envergure"
        content="helo"
        index="1">

      </expand>
  </div>
</template>

<script>
import Expand from "~/components/Expand.vue";
export default {
  components: {
    Expand
  }
};
</script>

<style>
</style>
