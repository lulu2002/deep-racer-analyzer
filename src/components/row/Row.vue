<template>
  <div class="py-3.5 px-2 flex items-center" :class="computeMargin" style="background-color: #FAFAFA">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    marginBottom: Boolean
  },
  computed: {
    computeMargin: function () {
      return this.marginBottom ? 'mb-4' : '';
    }
  }
};
</script>

<style scoped>

</style>
