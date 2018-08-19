<template>
  <div class="pos-r minh-100">
    <app-menu class="menu--position"></app-menu>
    <slot name="content"></slot>
  </div>
</template>

<script>
import AppMenu from "~/components/AppMenu.vue";

export default {
  components: {
    AppMenu
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
