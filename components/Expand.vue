<template>
    <div class="expandmore p-r m-b-20">
        <button @click="expand" :aria-controls="'expand_'+ index" :aria-expanded="ariaExpanded" class="expandmore__button">
            <span class="expandmore__title expandmore__title--rotate th-f-n th-fs-16" :class="[ariaExpanded ? 'expandmore__title--rotate-after' : '']">
              {{ title }}
            </span>
            >
        </button>
        <div :ref="'expand_' + index" :id="'expand_' + index" class="expandmore__content" :class="[ariaHidden ? 'expandmore__content--hidden' : '' ]" aria-labelledby="label_expand_1" :aria-hidden="ariaHidden">
            {{ content }}
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ariaExpanded: false,
      ariaHidden: true
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    expand() {
      this.ariaExpanded = !this.ariaExpanded;
      this.ariaHidden = !this.ariaHidden;
    }
  }
};
</script>

<style scoped>
.expandmore--faq {
  border-bottom: 2px solid #00e696;
}

.expandmore__button {
  border: 0;
  background-color: transparent;
  margin-bottom: 20px;
  text-align: left;
  padding: 0;
  width: 100%;
  cursor: pointer;
  outline: 0;
}

[dir="rtl"] .expandmore__button {
  text-align: right;
}

.expandmore__title {
  display: inline-block;
  max-width: calc(100% - 50px);
}

.expandmore__icon {
  transform: rotate(90deg);
  transition: transform 0.4s;
  display: inline-block;
}
.expandmore__icon--is-open {
  transform: rotate(270deg);
}
.expandmore__content {
  display: block;
  overflow: hidden;
  opacity: 1;
  transition: visibility 0s ease, max-height 0.4s ease, opacity 0.4s ease,
    padding 0.4s;
  max-height: 800px;
  padding-bottom: 5px;
  /* magic number for max-height = enough height */
  visibility: visible;
  transition-delay: 0s;
  padding-bottom: 10px;
}

/* This is the hidden state */
.expandmore__content[aria-hidden="true"] {
  display: block;
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  transition-delay: 0.4s, 0s, 0s;
  padding-bottom: 0;
}
</style>

