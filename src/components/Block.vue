<template>
  <div class="p-3">
    <div class="bg-white rounded-lg pb-3shadow-sm">
      <div class="px-5 py-3 flex items-center">
        <section-icon :icon-name="iconName" class="mr-4"></section-icon>
        <p class="text-xl font-semibold">{{ this.sectionTitle }}</p>
      </div>
      <div class="border-t w-full"></div>
      <div class="px-6 py-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SectionIcon from "@/components/SectionIcon";

export default {
  name: "Block",
  components: {SectionIcon},
  props: {
    sectionTitle: String,
    iconName: String
  },
  mounted() {
    console.log(this.iconName);
  }
};
</script>

<style scoped>

</style>
