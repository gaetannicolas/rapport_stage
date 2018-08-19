<template>
  <button @click="menuActive = !menuActive" class="menu" :class="menuActive ? 'active' : ''">
    <span class="menu__block">
      <span class="menu__line"></span>
      <span class="menu__line"></span>
      <span class="menu__line"></span>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false
    };
  }
};
</script>

<style>
.menu {
  width: 50px;
  height: 50px;
  background-color: #262e50;
  border-radius: 50%;
  border: 0;
}

.menu__block {
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
}

.menu__line {
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #eee;
  margin-bottom: 6px;
  transition: all 0.5s ease;
}

.menu.active .menu__block {
  width: 23px;
}

.menu.active .menu__line:first-child {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: left;
  transform-origin: left;
  width: 30px;
  border-radius: 15px;
}

.menu.active .menu__line:nth-child(2) {
  opacity: 0;
}

.menu.active .menu__line:last-child {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: left;
  transform-origin: left;
  width: 30px;
  border-radius: 15px;
}

.menu__line:last-child {
  margin-bottom: 0;
}

.menu:focus {
  outline: 0;
}
</style>
