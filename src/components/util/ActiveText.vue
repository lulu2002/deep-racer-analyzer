<template>
  <span :class="active ? 'text-black' : 'text-gray-300'">
    <slot/>
  </span>
</template>

<script>
export default {
  name: "ActiveText",
  props: {
    active: Boolean
  }
};
</script>

<style scoped>

</style>
