<template>
  <div>
    <button @click="toggleMenu" class="btn-menu-mobile" :class="menuActive ? 'active' : ''">
      <span class="btn-menu-mobile__block">
        <span class="btn-menu-mobile__line"></span>
        <span class="btn-menu-mobile__line"></span>
        <span class="btn-menu-mobile__line"></span>
      </span>
    </button>
    <div class="side-bar">
      <button @click="toggleMenu" class="btn-menu-desktop" :class="menuActive ? 'active' : ''">
        <span class="btn-menu-desktop__block">
          <span class="btn-menu-desktop__line"></span>
          <span class="btn-menu-desktop__line"></span>
          <span class="btn-menu-desktop__line"></span>
        </span>
      </button>
      <div class="side-bar__wrapper-title">
        <h1 class="side-bar__title">
          {{title}}
        </h1>
      </div>
    </div>
    <div class="menu" :class="menuActive ? 'active' : ''">
      <nuxt-link class="menu__link menu__link--main" to="sommaire">
        Sommaire
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--main" to="introduction">
        Introduction
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--main" to="contexte">
        1- Le contexte
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="xprime">
        X-Prime
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="appstud">
        Appstud
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--main" to="projet">
        2- Un projet de grande envergure
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="globale">
        Présentation globale
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="contraintes">
        Les contraintes techniques et humaines
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="web">
        Organisation coté web
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--main" to="place">
        3- Ma place dans le projet
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="missions">
        Mes missions
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="difficultes">
        Les difficultés rencontrées
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="adaptation">
        L'adaptation au projet
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--main" to="bilan">
        Mon bilan
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="apporter">
        Ce que j'ai essayé d'apporter
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="formation">
        Les apports de la formation
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--secondary" to="evolution">
        Mon évolution personnelle et professionnel
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--main" to="remerciements">
        Remerciements
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--main" to="lexique">
        Lexique
      </nuxt-link>
      <nuxt-link class="menu__link menu__link--main" to="annexes">
        Annexes
      </nuxt-link>

    </div>
    <button @click="toggleMenu" class="menu__button-bg" :class="menuActive ? 'active' : ''"></button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
      if (this.menuActive) {
        window.document.body.classList.add("has-open");
      } else {
        window.document.body.classList.remove("has-open");
      }
    }
  }
};
</script>

<style>
body.has-open {
  overflow: hidden;
}
.btn-menu-mobile {
  width: 50px;
  height: 50px;
  background-color: #262e50;
  border-radius: 50%;
  border: 0;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
}

.btn-menu-mobile__block {
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
}

.btn-menu-mobile__line {
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #eee;
  margin-bottom: 6px;
  transition: all 0.5s ease;
}

.btn-menu-mobile.active .btn-menu-mobile__block {
  width: 23px;
}

.btn-menu-mobile.active .btn-menu-mobile__line:first-child {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: left;
  transform-origin: left;
  width: 31px;
  border-radius: 15px;
}

.btn-menu-mobile.active .btn-menu-mobile__line:nth-child(2) {
  opacity: 0;
}

.btn-menu-mobile.active .btn-menu-mobile__line:last-child {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: left;
  transform-origin: left;
  width: 31px;
  border-radius: 15px;
}

.btn-menu-mobile__line:last-child {
  margin-bottom: 0;
}

.btn-menu-mobile:focus {
  outline: 0;
}

.side-bar {
  display: none;
  position: fixed;
  height: 100vh;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 80px;
  max-width: 80px;
  background-color: #eee;
}

.side-bar__wrapper-title {
  transform: rotate(180deg);
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.side-bar__title {
  font-family: "Dosis", sans-serif;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 1.6rem;
  font-weight: 300;
}

.btn-menu-desktop {
  width: 80px;
  height: 80px;
  background-color: #262e50;
  border: 0;
}

.btn-menu-desktop__block {
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
}

.btn-menu-desktop__line {
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #eee;
  margin-bottom: 6px;
  transition: all 0.5s ease;
}

.btn-menu-desktop.active .btn-menu-desktop__block {
  width: 23px;
}

.btn-menu-desktop.active .btn-menu-desktop__line:first-child {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: left;
  transform-origin: left;
  width: 30px;
  border-radius: 15px;
}

.btn-menu-desktop.active .btn-menu-desktop__line:nth-child(2) {
  opacity: 0;
}

.btn-menu-desktop.active .btn-menu-desktop__line:last-child {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: left;
  transform-origin: left;
  width: 30px;
  border-radius: 15px;
}

.btn-menu-desktop__line:last-child {
  margin-bottom: 0;
}

.btn-menu-desktop:focus {
  outline: none;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: #262e50;
  transform: translateX(-100%);
  transition: 0.5s ease;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 40px;
  z-index: 999;
}

.menu__link {
  text-decoration: none;
  color: #eee;
  display: block;
  font-family: "Dosis", sans-serif;
}

.menu__link--main {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 500;
}

.menu__link--secondary {
  font-size: 1.1rem;
  font-weight: 300;
}

.menu.active {
  transform: translateX(0%);
}

.menu__button-bg {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 80px);
  min-width: calc(100% - 80px);
  min-height: 100vh;
  transform: translateX(100%);
  background-color: transparent;
  border: 0;
  z-index: 99;
}
.menu__button-bg.active {
  transform: translateX(0);
}

.menu__button-bg:focus {
  outline: none;
}

@media screen and (min-width: 768px) {
  .btn-menu-mobile {
    display: none;
  }

  .side-bar {
    display: block;
  }

  .menu {
    width: 50%;
    min-width: 50%;
  }
  .menu.active {
    left: 80px;
  }
  .menu__button-bg {
    display: block;
  }
}
</style>
