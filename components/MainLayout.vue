<template>
  <div class="pos-r minh-100">
    <app-menu :title="title"></app-menu>
    <div class="content__container">
      <slot name="content"></slot>
      <page-navigation :prev="prev" :next="next"></page-navigation>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppMenu from "~/components/AppMenu.vue";
import PageNavigation from "~/components/PageNavigation.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    prev: {
      type: String,
      required: true
    },
    next: {
      type: String,
      required: true
    }
  },
  components: {
    AppMenu,
    PageNavigation,
    AppFooter
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

@media screen and (min-width: 768px) {
  .content__container {
    margin-left: 80px;
  }
}
</style>
