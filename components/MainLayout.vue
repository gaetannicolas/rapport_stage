<template>
  <div class="pos-r minh-100">
    <app-menu :title="title"></app-menu>
    <div class="content__container">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import AppMenu from "~/components/AppMenu.vue";

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
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

.content__container {
  margin-left: 0px;
}

@media screen and (min-width: 768px) {
  .content__container {
    margin-left: 80px;
  }
}
</style>
