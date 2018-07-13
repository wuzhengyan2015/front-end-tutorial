<template>
    <img v-image-preview :src="trueSrc"/>
</template>

<script>
import Vue from "vue";
import VueDirectiveImagePreviewer from "vue-directive-image-previewer";
import "vue-directive-image-previewer/dist/assets/style.css";
Vue.use(VueDirectiveImagePreviewer);
export default {
  props: {
    src: String
  },
  computed: {
    trueSrc: function() {
      return this.$withBase(this.src);
    }
  }
};
</script>

<style lang="stylus">
.vue-directive-image-previewer {
    .wrapper {
        z-index: 100;
    }

    img {
        z-index: 101;
    }
}
</style>
