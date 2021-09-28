<template>
  <div class="p-3">
    <div class="bg-white rounded-lg pb-3shadow-sm">
      <div class="px-10 py-3">
        <p class="text-xl font-semibold">{{ this.sectionTitle }}</p>
      </div>
      <div class="border-t w-full"></div>
      <div class="px-10 py-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    sectionTitle: String
  }
};
</script>

<style scoped>

</style>
