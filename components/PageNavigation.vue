<template>
  <div class="pagination">
    <nuxt-link class="pagination__link pagination__link--prev" :to="prev">
      Page Précédente
    </nuxt-link>

    <nuxt-link class="pagination__link pagination__link--next" :to="next">
      Page Suivante
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: String,
      required: true
    },
    next: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: space-between;
  padding: 50px 25px;
  max-width: 800px;
  margin: 0 auto;
}

.pagination__link {
  color: #262e50;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  position: relative;
  font-size: 16px;
}

.pagination__link:after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #262e50;
  transition: 0.5s ease;
}

.pagination__link--prev:after {
  transform-origin: 0%;
}

.pagination__link--next:after {
  transform-origin: 100%;
}

.pagination__link:hover:after {
  transform: scaleX(0);
}

@media screen and (min-width: 1024px) {
  .pagination__link {
    font-size: 20px;
  }
  .pagination {
    padding: 50px 0px;
  }
}
</style>
